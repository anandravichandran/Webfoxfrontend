"use client";

import { Homelogos } from "@/src/data/index";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeTicker() {
  return (
    <section className="px-6 sm:px-10 md:px-15 xl:px-25 py-15 md:py-12 bg-back-200 -translate-y-40">
      <div className="container mx-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.figure
            initial={{ translateX: 0 }}
            whileInView={{ translateX: "-70%" }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-14 pr-20 flex-none"
          >
            {Homelogos.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                style={{ height: '12rem', width: '12rem' }} // custom medium size
                className="object-contain" // ensures the image scales properly
              />
            ))}
            {Homelogos.map((item, index) => (
              <Image
                key={index + Homelogos.length}
                src={item.src}
                alt={item.alt}
                style={{ height: '12rem', width: '12rem' }} // custom medium size
                className="object-contain"
              />
            ))}
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
