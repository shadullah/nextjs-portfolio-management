"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface Project {
  _id: string;
  title: string;
  client: string;
  description: string;
  images: string[];
  work: string[];
}

const ProjectsPage = () => {
  const [pros, setPros] = useState<Project[]>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getCates = async () => {
      try {
        const res = await axios.get(
          "https://nestjs-crud-ruddy.vercel.app/projects",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log(res.data);
        setPros(res?.data?.items || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    getCates();
  }, []);

  const path = usePathname();
  const home = path === "/";

  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <div>
          {load ? (
            <>
              <p className="text-center text-lg font-bold my-12">Loading...</p>
            </>
          ) : (
            <>
              {pros?.length > 0 ? (
                <>
                  {home ? (
                    <>
                      <h1 className="font-bold text-5xl md:text-[64px] font-syne text-center">
                        My Projects Hightlight
                      </h1>
                      <div className=" flex justify-center mt-16">
                        <Link href="/projects">
                          <button className="text-[13px] font-bold font-rubik text-[#F4F7FA] h-[65px] w-[242px] border-[1px] border-[#FF9142] flex items-center text-center justify-center rounded-[32.5px]">
                            EXPLORE MORE{" "}
                            <span className="ml-3">
                              <FaArrowRightLong />
                            </span>
                          </button>
                        </Link>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 mx-auto my-24 p-1 md:p-0">
                        {pros?.slice(0, 4).map((pro, index) => (
                          <div
                            className="md:w-[560px] md:h-[768px]"
                            key={pro?._id || index}
                          >
                            <Link href={`/projects/${pro?._id}`}>
                              <div className="p-2 md:p-0 rounded-lg">
                                <div>
                                  <Image
                                    src={pro?.images[0]}
                                    alt="projects"
                                    height={620}
                                    width={560}
                                    unoptimized
                                    className="h-[310px] w-[310px] md:h-[620px] md:w-[560px] rounded-2xl"
                                  />
                                </div>
                              </div>
                              <div className="flex items-center mt-8 space-x-6">
                                <h3 className="font-bold text-2xl font-syne ">
                                  {pro.title}
                                </h3>
                                <div className="border-[#FF9142] w-[48px] border-[1px]"></div>
                              </div>
                              <div className="mt-12 font-rubik text-sm space-y-2 text-[#606060]">
                                <p>
                                  Client:{" "}
                                  <span className="ml-4 text-white">
                                    {pro.client}
                                  </span>
                                </p>
                                <p>
                                  Work:{" "}
                                  <span className="ml-5 text-white">
                                    {pro.work}
                                  </span>
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="px-6 md:px-0 mt-24">
                        <h1 className="font-syne text-4xl md:text-7xl font-bold mb-3">
                          My Projects
                        </h1>
                        <p className="font-rubik text-sm md:text-lg font-medium text-[#949494] mb-14 md:mb-20">
                          For Any Project Knock Us
                        </p>
                        <div className="border-[1px] border-white mb-24"></div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 mx-auto my-24 p-1 md:p-0">
                        {pros?.map((pro, index) => (
                          <div
                            className="md:w-[560px] md:h-[768px]"
                            key={pro?._id || index}
                          >
                            <Link href={`/projects/${pro?._id}`}>
                              <div className="p-2 md:p-0 rounded-lg">
                                <div>
                                  <Image
                                    src={pro?.images[0]}
                                    alt="projects"
                                    height={620}
                                    width={560}
                                    unoptimized
                                    className="md:h-[620px] md:w-[560px] rounded-2xl"
                                  />
                                </div>
                              </div>
                              <div className="flex items-center mt-8 space-x-6">
                                <h3 className="font-bold text-2xl font-syne ">
                                  {pro.title}
                                </h3>
                                <div className="border-[#FF9142] w-[48px] border-[1px]"></div>
                              </div>
                              <div className="mt-12 font-rubik text-sm space-y-2 text-[#606060]">
                                <p>
                                  Client:{" "}
                                  <span className="ml-4 text-white">
                                    {pro?.client}
                                  </span>
                                </p>
                                <p>
                                  Work:{" "}
                                  <span className="ml-5 text-white">
                                    {pro?.work}
                                  </span>
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div className="text-red-600 font-bold text-center my-24">
                    Server Error Or No Projects Found
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
