"use client";
import { features } from "@/src/app/dataleakage/data/leakageindex";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LeakageFeatures() {
  return (
    <section className="py-24 px-3 sm:px-5 md:px-10 xl:px-20 bg-black-100">
      <div className="container mx-auto">

        
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
