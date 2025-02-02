"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SlClose } from "react-icons/sl";

interface Project {
  _id: string;
  title: string;
  client: string;
  description: string;
  images: string[];
  work: string[];
}

const UpdateProject = () => {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProj] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/projects/${id}`);
        setProj(res.data);
      } catch (error) {
        console.error("Error fetching project:", error);
        toast.error("Failed to fetch project details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const res = await axios.put(
        `http://localhost:8000/projects/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response data:", res.data);

      if (res.status === 200) {
        toast.success("Project updated successfully");
        router.push("/dashboard/projects");
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Could not update project");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-lg font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">Project</h2>
          <p className="text-sm text-gray-400">Update Project Details</p>
        </div>
        <Link href="/dashboard/projects">
          <button className="p-3 rounded-xl border border-white hover:bg-gray-700 transition-colors">
            <SlClose className="w-5 h-5" />
          </button>
        </Link>
      </div>

      <div className="border-t border-gray-700 my-6" />

      <form onSubmit={handleUpdate} className="space-y-8">
        <div className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-xl uppercase font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={project?.title}
              className="w-full p-3 rounded bg-[#161D21] border-b-2 border-violet-200 focus:outline-none"
              required
            />
          </div>

          {/* Client Input */}
          <div>
            <label className="block text-xl uppercase font-medium mb-2">
              Client
            </label>
            <input
              type="text"
              name="client"
              defaultValue={project?.client}
              className="w-full p-3 rounded bg-[#161D21] border-b-2 border-violet-200 focus:outline-none"
              required
            />
          </div>

          {/* Work Input */}
          <div>
            <label className="block text-xl uppercase font-medium mb-2">
              Work
            </label>
            <input
              type="text"
              name="work"
              defaultValue={project?.work}
              placeholder="Enter work categories separated by commas"
              className="w-full p-3 rounded bg-[#161D21] border-b-2 border-violet-200 focus:outline-none"
              required
            />
          </div>

          {/* Image Input */}
          <div>
            <label className="font-medium font-rubik text-xl uppercase">
              Project Image
            </label>
            {project?.images && project.images.length > 0 && (
              <div className="my-2">
                <Image
                  height={300}
                  width={300}
                  src={project.images[0]}
                  alt="Current project image"
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            )}
            <input
              type="file"
              className="w-full outline-none rounded bg-[#161D21] border-b-2 border-violet-200 p-2 mt-2 mb-3"
              name="images"
            />
            <p className="text-sm text-gray-500">
              Upload new image only if you want to change the current one
            </p>
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-xl uppercase font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={project?.description}
              className="w-full p-3 rounded bg-[#161D21] border-b-2 border-violet-200 focus:outline-none min-h-[150px]"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-[#FF9142] text-white rounded-full uppercase font-medium text-lg hover:bg-[#e87f32] transition-colors"
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
