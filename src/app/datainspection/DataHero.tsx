// import React from 'react'
// import {Spotlight} from '@/components/ui/Spotlight'
// import styles from "@/app/datainspection/data/style";
// import Image from "next/image";
// import robot from "@/public/robot.png"

// const DataHero = () => {
//   return (
//     <div className="pb-20 pt-36">
//     <div>
//       <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
//       <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="purple"/>
//       <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
//     </div>

//     {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center"> */}
//       {/* Radial gradient for the container to give a faded look */}
//       {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
//     </div> */}
//     <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
//       {/* Radial gradient for the container to give a faded look */}
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
//     </div>
//     <div className="flex flex-row justify-between items-center w-full">
//         <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
//           The Next <br className="sm:block hidden" />{" "}
//           <span className="text-gradient">Generation</span>{" "}
//         </h1>
//         <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
//         Payment Methond.
//       </h1>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         Our team of experts use a methodology to identify the credit cards most
//         likely to fit your needs. We examine annual percentage rates, annual
//         fees.
//       </p>
//     </div>
//     <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
//       <Image
//         src={robot}
//         alt="billings"
//         className="w-[100%] h-[100%] relative z-[5]"
//       />
//       <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//       <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
//       <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//     </div>
//       </div>


    
//   )
// }

import React from 'react'
import {Spotlight} from '@/components/ui/Spotlight'
import styles from "@/app/datainspection/data/style";
import Image from "next/image";
import demo from "@/public/demo.svg";
import datainspectionpage from "@/public/datainspectionpage.gif"

const DataHero = () => {
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
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[40px] text-white ss:leading-[100px] leading-[75px]">
          Outsmart Errors<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Our Confidential Information Identification Tool </span>{" "}
          </h1>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[40px] text-white ss:leading-[100px] leading-[75px]">
          Catches Flaws Before They Catch You.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Using cutting-edge cybersecurity methods, our real-time data inspection capability finds and stops sensitive data leaks in a variety of file formats. Through the use of artificial intelligence (AI) and machine learning, we can secure and prevent potential breaches of your personal information by analyzing photos, text, videos, and PDFs.
          </p>
        </div>

        {/* Image on the right side */}
        <div className={`${styles.flexCenter} flex-1 relative`}>
          <Image
            src={datainspectionpage}
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

export default DataHero;
