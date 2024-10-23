"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/CanavasRevealEffect"

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        WebFoxShield<span className="text-purple"> Features</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card title="Textual Content Analysis" icon={<AceternityIcon order="Text Data Extraction"/>}
         description = "Critical information, including passwords, personal identifiers, and private correspondence, is frequently exposed in text data. Using Natural Language Processing (NLP), our text inspection function examines information in real-time to spot patterns that could indicate a data leak. We search for terms, expressions, and context that can point to the exposure of sensitive data, and we immediately notify you to help reduce risks and guarantee data security. "
         >
        
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Image Segmentation" icon={<AceternityIcon order="Picture Inspection"/>}
        description = "To find any sensitive or private information that may be disguised, our AI-powered picture analysis technology examines visual data. We identify exposed data and send out prompt notifications by utilizing  pattern recognition, giving you the ability to efficiently manage and safeguard your photos. This guarantees the confidentiality and protection of your visual data.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-yellow"
            colors={[
              [241, 221, 56],
              [179, 205, 50],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card title="File Content Inspection" icon={<AceternityIcon order="File Integrity Analysis"/>}
        description = "Sensitive data, including private company information and unique IDs, is frequently stored in PDF files. In order to find any security vulnerabilities, our technology thoroughly examines your PDFs, scanning the content, metadata, and embedded elements. We use machine learning algorithms to identify sensitive data, including financial and personal information, so you are informed of any potential breaches right away.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-blue"
            colors={[[50, 102, 205],[115, 50, 205]]}
          />
        </Card>
        <Card title="Video Analysis" icon={<AceternityIcon order="Motion Recognition"/>}description = "Your data is safe because our AI-powered system carefully examines the videos you've shared to find any contained sensitive information. Our algorithms recognize possible threats and deliver alerts in real time, regardless of whether the content is hidden information or private text that is visible within the video. This advanced level of inspection keeps your video footage safe and in compliance with cybersecurity regulations by guarding against unintentional data breaches. ">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red"
            colors={[[205, 50, 102],[205, 50, 140],
            ]}
          />
        </Card>

      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description:string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
         {/* add this one for the description */}
         <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order:string}) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;