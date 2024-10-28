import { leakagetestimonials } from "@/src/app/dataleakage/data/leakageindex";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function TestimonialCard({
  id,
  className,
  duration,
}: {
  id: "col1" | "col2" | "col3";
  className?: string;
  duration: number;
}) {
  const col1 = leakagetestimonials.slice(0, 3);
  const col2 = leakagetestimonials.slice(3, 6);
  const col3 = leakagetestimonials.slice(6, 9);
  const testimonial = id === "col1" ? col1 : id === "col2" ? col2 : col3;
  return (
    <div className={className}>
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: "-50%" }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-6 pb-6 flex-none"
      >
        {testimonial.map((item, index) => (
          <Testimonial key={index} item={item} />
        ))}
        {testimonial.map((item, index) => (
          <Testimonial key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function Testimonial({ item }: { item: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="p-10 border max-w-xs w-full border-violet-500/10 rounded-3xl bg-black-100 shadow-[0_7px_14px_rgba(18, 1, 34, 0.966)]"
    >
      <div>{item.text}</div>
      <figure className="flex gap-2 mt-5">
        <Image
          src={item.imageSrc}
          alt={item.username}
          width={100}
          height={100}
          className="size-60 border"
        />
      </figure>
    </motion.div>
  );
}
