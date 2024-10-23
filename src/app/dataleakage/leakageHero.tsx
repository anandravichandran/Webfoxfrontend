
"use client"
import React from 'react'
import {Spotlight} from '@/components/ui/Spotlight'
import styles from "@/app/datainspection/data/style";
import Image from "next/image";
import demo from "@/public/demo.svg"

const LeakageHero = () => {
  return (
    <div className="pb-40 pt-40 h-screen">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex flex-row justify-between items-center w-full relative z-10">
        {/* Wording on the left side */}
        <div className="flex-1">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Don’t Let Your Data Slip Away<br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Our Extension Spots Leaks</span>{" "}
          </h1>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Before They Put You At Risk.

          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our state-of-the-art solution actively detects your data flows by cross-referencing the information you provide with extensive breach databases.

          </p>
        </div>

        {/* Image on the right side */}
        <div className={`${styles.flexCenter} flex-1 relative`}>
          <Image
            src={demo}
            alt="billings"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
    </div>
  )
}

export default LeakageHero;