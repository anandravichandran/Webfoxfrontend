// "use client";
// import React from 'react'
// import {InfiniteMovingCards} from "@/components/ui/InfiniteMovingCards"
// import{datacompanies,datatestimonials} from "@/app/dataleakage/data/leakageindex"


// const DataClient = () => {
//   return (
//     <section className="py-20" id="">
//         <h1 className="heading">
//             Kind Words from
//             <span className="text-purple">
//                 Satisfied Clients
//             </span>
//         </h1>
//         <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
//         <InfiniteMovingCards
//                items={datatestimonials}
//                direction='right'
//                speed='slow'           
//             />
//         </div>
//         <div className="flex flex-wrap items-center justify-center gap-4 p-4 gap-x-24 gap-y-8 md:gap-16 max-lg:mt-10" >
//           {datacompanies.map((company) => (
//             <React.Fragment key={company.id}>
//               <div className="flex md:max-w-60 max-w-32 gap-2 lg:max-w-60 ">
//                 <img
//                   src={company.img}
//                   alt={company.name}
//                   className="md:w-10 w-5"
//                 />
//                 <img
//                   src={company.nameImg}
//                   alt={company.name}
//                   width={company.id === 4 || company.id === 5 ? 100 : 150}
//                   className="md:w-24 w-20"
//                 />
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//     </section>
//   )
// }

// export default DataClient

"use client";
import React from "react";
import { InfiniteMovingCards } from "@/src/components/ui/InfiniteMovingCards";
import {  datatestimonials } from "@/src/app/dataleakage/data/leakageindex";

const DataClient = () => {
  const mappedTestimonials = datatestimonials.map((testimonial) => ({
    ...testimonial,
    img: testimonial.img ? <img src={testimonial.img} alt={testimonial.name} /> : undefined, // Wrap img string in JSX <img> tag
  }));

  return (
    <section className="py-20">
      <h3 className="heading">
       Data’s safety amidst last year’s <span className="text-purple">Trillion-record Breaches.</span>
      </h3>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <InfiniteMovingCards items={mappedTestimonials} direction="right" speed="slow" 
           
          />
      </div>
    </section>
  );
};

export default DataClient;
