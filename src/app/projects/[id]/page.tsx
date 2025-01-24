"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Project {
  _id: string;
  title: string;
  client: string;
  description: string;
  images: string[];
  work: string[];
}

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);
  const [project, setProj] = useState<Project | null>(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/projects/${id}`);
        console.log(res.data); // Ensure the response structure is correct
        setProj(res.data); // Set the project data correctly
      } catch (err) {
        console.error(err);
        toast.error("Details could not be fetched", { duration: 3000 });
      } finally {
        setLoad(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (load) {
    return <p className="text-center text-lg font-bold my-12">Loading...</p>;
  }

  return (
    <div>
      <div className="px-6 md:px-0 mt-24">
        <h1 className="font-syne text-4xl md:text-7xl font-bold mb-3">
          Project Details
        </h1>
        <p className="font-rubik text-sm md:text-lg font-medium text-[#949494] mb-14 md:mb-20">
          Details About The Porject
        </p>
        <div className="border-[1px] border-white mb-24"></div>
      </div>
      <div>
        {" "}
        <div className="px-6 md:px-0 mt-24">
          <h1 className="font-syne text-4xl md:text-7xl font-bold mb-3">
            {project?.title}
          </h1>
          <p className="font-rubik text-sm md:text-lg font-medium text-[#949494] mb-14 md:mb-20">
            {project?.description}
          </p>
          <div className="border-[1px] border-white mb-24"></div>
          <div>
            <h2 className="font-bold text-2xl mb-4">Client</h2>
            <p>{project?.client}</p>
            <h2 className="font-bold text-2xl mt-8 mb-4">Work</h2>
            <ul>
              {project?.work.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
            <h2 className="font-bold text-2xl mt-8 mb-4">Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
