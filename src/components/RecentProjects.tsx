"use client";
import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';
import { projects } from "@/src/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="Data Inspection">
      <div className="py-20" id="Data Leakage"></div>
      <h1 className="heading">
        A Glimpse of{" "}
        <span className="text-purple">Overview</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 translate-y-5 bg-black-100">
        {projects.map(({id,title,des,img,iconLists,link}) => (
          <div
            className="sm:h-[41rem]h-[32rem] lg:min-h-[32.5rem] flex  items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer
              title={link}
              href={"Sensitive Data Analysis"}
            >
              <div className="relative flex items-center justify-center sm:w-[540px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]">
                <div
                  className="absolute translate-x-52 w-full h-full  lg:rounded-3xl"
                  style={{ backgroundColor: "#0a0000" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={img}
                  alt="cover"
                  className="absolute bottom-0 w-full h-auto max-w-full max-h-full"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>
                {/* Malware Analysis */}
                <div className="py-20" id="Malware Analysis"></div>
               {/* Phising Website */}
               <div className="py-20" id="Phishing Website"></div>
                <div className="flex justify-center items-center">
                  <Link href={link}>
                  <div className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                 
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                  </Link>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;