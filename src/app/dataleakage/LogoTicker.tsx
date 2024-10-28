// "use client";

// import { logos } from "@/src/app/dataleakage/data/leakageindex";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function LogoTicker() {
//   return (
//     <section className="px-6 sm:px-10 md:px-15 xl:px-25 py-15 md:py-12 bg-back-200">
//       <div className="container mx-auto">
//         <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
//           <motion.figure
//             initial={{ translateX: 0 }}
//             whileInView={{ translateX: "-70%" }}
//             transition={{ duration: 15, ease: "linear", repeat: Infinity }}
//             className="flex items-center gap-14 pr-20 flex-none"
//           >
//             {logos.map((item, index) => (
//               <Image
//                 key={index}
//                 className="h-22 w-22"
//                 src={item.src}
//                 alt={item.alt}
//               />
//             ))}
//             {logos.map((item, index) => (
//               <Image
//                 key={index}
//                 className="h-22 w-22"
//                 src={item.src}
//                 alt={item.alt}
//               />
//             ))}
//           </motion.figure>
//         </div>
//       </div>
//     </section>
//   );
// }

// LogoTicker.js

"use client";

import { logos } from "@/src/app/dataleakage/data/leakageindex";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LogoTicker() {
  return (
    <section className="px-6 sm:px-10 md:px-15 xl:px-25 py-15 md:py-12 bg-back-200">
      <div className="container mx-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.figure
            initial={{ translateX: 0 }}
            whileInView={{ translateX: "-70%" }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-14 pr-20 flex-none"
          >
            {logos.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                style={{ height: '12rem', width: '12rem' }} // custom medium size
                className="object-contain" // ensures the image scales properly
              />
            ))}
            {logos.map((item, index) => (
              <Image
                key={index + logos.length}
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
