"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type WorkItem = {
  img: string;
  color: string;
  title: string;
};

type WorkColumn = {
  columns: number;
  items: WorkItem[];
};

const WorkPage = () => {
  const [works, setWorks] = useState<WorkColumn[]>([]);

  // Fetch the data
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("works.json");
        const data = await response.json();
        setWorks(data);
      } catch (error) {
        console.error("Failed to fetch works:", error);
      }
    };

    fetchWorks();
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto my-16 md:my-36">
        <div className="px-6 md:px-0">
          <h1 className="font-syne text-4xl md:text-7xl font-bold mb-3">
            Our works
          </h1>
          <p className="font-rubik text-sm md:text-lg font-medium text-[#949494] mb-14 md:mb-20">
            Showcase About Works
          </p>
          <div className="border-[1px] border-white mb-24"></div>
        </div>
        <div>
          {works.length > 0 ? (
            <div className="space-y-10">
              {works.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-${row.columns}`}
                >
                  {row.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className=" text-white p-4 rounded-lg flex flex-col items-center"
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={row.columns === 2 ? 555 : 347}
                        height={347}
                        className="rounded-2xl object-cover object-top"
                        style={{
                          width: "100%",
                          height: "347px",
                          objectFit: "cover",
                        }}
                      />
                      <span className="text-sm font-bold font-inter mt-6">
                        {item.color}
                      </span>
                      <h3 className="text-2xl font-inter font-bold mt-2">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p>Loading works...</p>
          )}
          <div className="flex justify-center my-24">
            <button className="font-inter font-bold text-[13px] text-[#FF9142] border-[#FF9142] border-[1px] w-[224px] h-[60px] rounded-[32.5px] uppercase">
              Load more works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
