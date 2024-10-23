"use client";
import { features } from "@/app/dataleakage/data/leakageindex";
import Chip from "./ui/Chip";
import GradientH2 from "./ui/GradientH2";
import SectionText from "./ui/SectionText";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LeakageFeatures() {
  return (
    <section className="py-24 px-3 sm:px-5 md:px-10 xl:px-20 bg-black-100">
      <div className="container mx-auto">
  <div className="max-w-full mx-auto ">
    <div className="flex items-start">
      <Chip className=" justify-items-center text-white">Real-Time Detection of Data Leakage for Maximum Protection:
      </Chip>
    </div>
    <GradientH2 className=" text-white-100 text-left">
    ive.
    </GradientH2>
    <SectionText className="text-white-100">
    It   identifies potential  in real-time, allowing users to take immediate action to protect their personal and professional data. This proactive approach ensures the protection of sensitive information in the ever evolving digital landscape.

    </SectionText>
  </div>


        <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-black-100 e/70 drop-shadow-2xl rounded-lg p-10"
            >
              <motion.figure
                drag
                dragSnapToOrigin
                initial={{ translateY: 0 }}
                whileInView={{ translateY: [0, 25, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  duration: 2.5,
                }}
              >
                <Image draggable={false} src={item.src} alt={item.title} />
              </motion.figure>
              <div className="text-center">
                <h3 className="text-lg lg:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm mt-3 max-w-60 mx-auto lg:max-w-80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
