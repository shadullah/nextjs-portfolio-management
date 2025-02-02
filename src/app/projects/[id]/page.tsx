"use client";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
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

const ProjectDetails = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const [project, setProj] = useState<Project | null>(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoad(true); // Set loading to true before fetching
      try {
        const res = await axios.get(` /projects/${id}`);
        setProj(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Details could not be fetched", { duration: 3000 });
      } finally {
        setLoad(false);
      }
    };

    if (id) {
      // Check if id is available
      fetchDetails();
    }
  }, [id]);

  if (load) {
    return <p className="text-center text-lg font-bold my-12">Loading...</p>;
  }

  if (!project) {
    // Handle the case where the project is not found
    return <p>Project not found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="px-6 md:px-0 mt-24">
        <h1 className="font-syne text-4xl md:text-7xl font-bold mb-3">
          Project Details
        </h1>
        <p className="font-rubik text-sm md:text-lg font-medium text-[#949494] mb-14 md:mb-20">
          Details About The Porject
        </p>
        <div className="border-[1px] border-white mb-24"></div>
      </div>
      <div className="mb-48">
        {project?.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            height={636}
            width={1150}
            alt={`Project Image ${index + 1}`}
            className="w-full h-auto rounded-lg"
          />
        ))}
        <div className="mx-36">
          <h1 className="font-syne text-3xl font-bold mb-14 my-24">
            Project Story
          </h1>{" "}
          <p className="font-rubik text-sm md:text-lg text-[#9CA7B8] mb-14 md:mb-20">
            {project?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
