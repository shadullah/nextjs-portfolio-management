"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

interface Project {
  _id: string;
  title: string;
  images: string;
  work: string[];
  client: string;
}

const ProjectDataTable = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCates = async () => {
      try {
        const res = await axios.get(" /projects", {
          headers: {
            Accept: "application/json",
          },
        });
        console.log(res.data);
        setProjects(res?.data?.items || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCates();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete the project??"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(` /projects/${id}`);
      setProjects((prev) => prev.filter((project) => project._id !== id));
      toast.success("deleted success!!", { duration: 3000 });
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete project!!!");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-800 border-b">
          <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Project Name</th>
            <th className="p-3 text-left">Work</th>
            <th className="p-3 text-left">Client</th>
            <th className="p-3 text-left">Update</th>
            <th className="p-3 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects?.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No works found
              </td>
            </tr>
          ) : (
            projects?.map((project, index) => (
              <tr
                key={project._id || index}
                className="border-b hover:bg-gray-800"
              >
                <td className="p-3">
                  <Image
                    src={project?.images[0]}
                    alt={project?.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">{project.title}</td>
                <td className="p-3">
                  <div className="flex gap-2">{project.work}</div>
                </td>
                <td className="p-3">{project.client}</td>
                <td className="p-3 text-center">
                  <Link href={`/dashboard/projects/${project._id}`}>
                    <button className="text-green-200 hover:bg-green-600 p-2 rounded-full transition-all duration-200 text-2xl">
                      <FaRegEdit />{" "}
                    </button>
                  </Link>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="text-red-200 hover:bg-red-600 p-2 rounded-full transition-all duration-200 text-2xl"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectDataTable;
