"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Project {
  _id: string;
  title: string;
  image: string;
  work: string[];
  client: string;
}

const ProjectDataTable = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching works:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500">
                No works found
              </td>
            </tr>
          ) : (
            projects.map((project) => (
              <tr key={project._id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <Image
                    src={project.image[0]}
                    alt={project.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">{project.title}</td>
                <td className="p-3">
                  <div className="flex gap-2">{project.work}</div>
                </td>
                <td className="p-3">{project.client}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectDataTable;
