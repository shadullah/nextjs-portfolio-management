"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { SlClose } from "react-icons/sl";

const ProjectForm = () => {
  const rout = useRouter();
  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Debug: Log FormData
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const res = await axios.post(" /projects", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response data:", res.data);

      if (res.status === 201) {
        toast.success("Project added");
        (e.target as HTMLFormElement).reset();
        rout.push("/dashboard/projects");
      }
    } catch (error) {
      console.error("Error adding project:", error || error);
      toast.error("Could not add project");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[30px] font-bold">Project</h2>
          <p className="text-sm mb-1">Create a new Project</p>
        </div>
        <Link href={"/dashboard/projects"}>
          <button
            className={
              "bg-transparent text-white border border-white hover:bg-gray-700 p-3 rounded-xl"
            }
          >
            <SlClose />
          </button>
        </Link>
      </div>
      <div className="my-5 border-[0.5px] border-white"></div>
      {/* post form */}
      <div>
        <form onSubmit={handleAdd} className="mb-12">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 space-y-12">
            <div>
              <label className="font-medium  font-rubik text-xl uppercase">
                Title
              </label>
              <input
                type="text"
                placeholder="write title..."
                className="w-full outline-none rounded bg-[#161D21]  border-b-2 border-violet-200 p-2 mt-2 mb-3"
                name="title"
                required
              />
            </div>
            <div>
              <label className="font-medium  font-rubik text-xl uppercase">
                Client
              </label>
              <input
                type="text"
                placeholder="client name..."
                className="w-full outline-none rounded bg-[#161D21]  border-b-2 border-violet-200 p-2 mt-2 mb-3"
                name="client"
                required
              />
            </div>
            <div>
              <label className="font-medium  font-rubik text-xl uppercase">
                Work
              </label>
              <input
                type="text"
                placeholder="works related to..."
                className="w-full outline-none rounded bg-[#161D21]  border-b-2 border-violet-200 p-2 mt-2 mb-3"
                name="work"
                required
              />
            </div>
            <div>
              <label className="font-medium  font-rubik text-xl uppercase">
                Project Image
              </label>
              <input
                type="file"
                placeholder="works related to..."
                className="w-full outline-none rounded bg-[#161D21]  border-b-2 border-violet-200 p-2 mt-2 mb-3"
                name="images"
                required
              />
            </div>

            <div>
              <label className="font-medium font-rubik text-xl  uppercase">
                Description
              </label>
              <textarea
                className="w-full outline-none rounded bg-[#161D21]  border-b-2 border-violet-200 p-2 mt-2 mb-3"
                name="description"
                placeholder="project description here..."
                required
              />
            </div>
          </div>
          <div className="px-4 mt-8">
            <button className="uppercase font-medium text-lg bg-[#FF9142] px-3 py-2 rounded-[30px] font-rubik">
              Add Projects
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
