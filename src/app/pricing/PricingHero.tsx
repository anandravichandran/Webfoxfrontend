// "use client";

// import { pricing } from "@/app/pricing/constants/index";
// import Chip from "@/app/pricing/Chip";
// import GradientH2 from "@/app/pricing/GradientH2";
// import SectionText from "@/app/pricing/SectionText";
// import { FaCheck } from "react-icons/fa"; // Import from react-icons
// import { twMerge } from "tailwind-merge";
// import { motion } from "framer-motion";
// import Image from "next/image"; // Using next/image for SVG
// import {Spotlight} from "@/components/ui/Spotlight";

// interface PricingItem {
//   title: string;
//   monthlyPrice: number;
//   buttonText: string;
//   popular: boolean;
//   inverse?: boolean;
//   features: readonly string[];  // Updated to readonly
// }

// export default function Pricing() {
//   return (
//     <div className="pb-40 pt-40 w-screen h-screen">
//     <div>
//       <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
//       <Spotlight className="top-20 left-full h-[70vh] w-[100vw]" fill="purple"/>
//       <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
//     </div>

//     <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
//       {/* Radial gradient for the container to give a faded look */}
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
//     </div>
//     <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">


// {/* ----------------------------------- */}


//   <div className="container mx-auto">
//     <div className="mx-auto max-w-[540px]">
//       <div className="flex items-center justify-center">
//         <Chip>Pay less money</Chip>
//       </div>
//       <GradientH2 className="text-center relative z-20">
//         Less money but professional service
//       </GradientH2>
//       <SectionText className="relative z-20">
//         Choose a plan that fits your needs and unlock all the features to
//         build your ideal no-code SaaS website effortlessly.
//       </SectionText>
//     </div>
//     <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center mt-10 relative z-20">
//       {pricing.map((item: PricingItem, index: number) => (
//         <div
//           key={index}
//           className={twMerge(
//             "p-10 border max-w-xs w-full border-[#e431fc] rounded-3xl shadow-[0_7px_14px_#eaeaea]",
//             // Apply white background and black text for "Free" and "Business"
//             (item.title === "Free" || item.title === "Business") && "bg-white text-black",
//             // Inverse style for other items
//             item.inverse && "border-black bg-black text-white"
//           )}
//         >
//           <div className="flex justify-between">
//             <h3
//               className={twMerge(
//                 "text-lg font-bold text-black/50",
//                 item.inverse && "text-orange-500/60"
//               )}
//             >
//               {item.title}
//             </h3>
//             {item.popular && (
//               <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
//                 <motion.span
//                   animate={{ backgroundPositionX: "100%" }}
//                   transition={{
//                     repeat: Infinity,
//                     ease: "linear",
//                     repeatType: "loop",
//                     duration: 1.5,
//                   }}
//                   className="font-medium bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] [background-size:200%] text-transparent bg-clip-text"
//                 >
//                   Popular
//                 </motion.span>
//               </div>
//             )}
//           </div>
//           <div className="flex items-baseline gap-1 mt-[30px]">
//             <span className="text-4xl font-bold tracking-tighter leading-none">
//               ${item.monthlyPrice}
//             </span>
//             <span
//               className={twMerge(
//                 "tracking-tight font-bold text-black/50",
//                 item.inverse && "text-white/60"
//               )}
//             >
//               /month
//             </span>
//           </div>
//           <button
//             className={twMerge(
//               "capitalize w-full mt-[30px] self-center tracking-tight bg-black text-white py-2 px-4 rounded-lg cursor-pointer",
//               item.inverse && "bg-violet-600 text-black"
//             )}
//           >
//             {item.buttonText}
//           </button>

//           <ul className="flex flex-col gap-5 mt-8">
//             {item.features.map((feature, index) => (
//               <li key={index} className="text-sm flex items-center gap-4">
//                 <FaCheck className="size-6" /> <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </div>


// {/* ------------------inbetween place the content */}
//     </div>

//     <div className="flex justify-center relative my-20 z-10">
//         <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]flex flex-col items-center justify-center'>
           
       
       
//         </div>
        
         

     
//     </div>

//     </div>
   
//   );
// }







"use client";

import { pricing } from "@/app/pricing/constants/index";
import Chip from "@/app/pricing/Chip";
import GradientH2 from "@/app/pricing/GradientH2";
import SectionText from "@/app/pricing/SectionText";
import { FaCheck } from "react-icons/fa"; // Import from react-icons
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Image from "next/image"; // Using next/image for SVG
import {Spotlight} from "@/components/ui/Spotlight";
import {TextGenerateEffect} from "@/components/ui/TextGenerationEffect";
interface PricingItem {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse?: boolean;
  features: readonly string[];  // Updated to readonly
}

export default function Pricing() {
  return (
    <div className="w-screen h-screen pb-40 pt-40">
  {/* Ensure min-height to prevent footer overlapping */}
  <div>
    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
    <Spotlight className="top-20 left-full h-[70vh] w-[100vw]" fill="purple" />
    <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
  </div>

  <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />
    
    {/* Adjust z-index to ensure the pricing section appears below the floating nav */}
    <div className="container mx-auto z-10 pt-20"> {/* Added padding to push content below nav */}
    <TextGenerateEffect 
    className="text-left text-[40px] md:text-3xl lg:text-5xl"
    words="Subscribe To Our Service"
  />
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-start gap-6 items-start mt-auto relative z-20">
        {/* Pricing items */}
        {pricing.map((item: PricingItem, index: number) => (
          <div
            key={index}
            className={twMerge(
              "p-10 border max-w-xs w-full border-[#040415] rounded-3xl",
              (item.title === "Free" || item.title === "Business") && "bg-white text-black",
              item.inverse && "border-black bg-black text-white"
            )}
          >
            <div className="flex justify-between">
              <h3
                className={twMerge(
                  "text-lg font-bold text-black/50",
                  item.inverse && "text-orange-500/60"
                )}
              >
                {item.title}
              </h3>
              {item.popular && (
                <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                  <motion.span
                    animate={{ backgroundPositionX: "100%" }}
                    transition={{
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                      duration: 1.5,
                    }}
                    className="font-medium bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] [background-size:200%] text-transparent bg-clip-text"
                  >
                    Popular
                  </motion.span>
                </div>
              )}
            </div>
            <div className="flex items-baseline gap-1 mt-[30px]">
              <span className="text-4xl font-bold tracking-tighter leading-none">
                ${item.monthlyPrice}
              </span>
              <span
                className={twMerge(
                  "tracking-tight font-bold text-black/50",
                  item.inverse && "text-white/60"
                )}
              >
                /month
              </span>
            </div>
            <button
              className={twMerge(
                "capitalize w-full mt-[30px] self-center tracking-tight bg-black text-white py-2 px-4 rounded-lg cursor-pointer",
                item.inverse && "bg-violet-600 text-black"
              )}
            >
              {item.buttonText}
            </button>

            <ul className="flex flex-col gap-5 mt-8">
              {item.features.map((feature, index) => (
                <li key={index} className="text-sm flex items-center gap-4">
                  <FaCheck className="size-6" /> <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}












