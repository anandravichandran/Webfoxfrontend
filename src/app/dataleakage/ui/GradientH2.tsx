import { twMerge } from "tailwind-merge";

export default function GradientH2({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    // <h2
    //   className={twMerge(
    //     className,
    //     // "text-[22px] md:text-lg md:leading-[60px] mt-5 font-bold tracking-tighter text-transparent bg-gradient-to-b from-white-100 to-[#8c06f9] bg-clip-text text-left"
    //     "text-center text-[22px] leading-[30px] tracking-tight text-[#c2a8f6] mt-5"
    //   )}
    // >
    //   {children}
    // </h2>
    <ul className={twMerge(
      className,
      "list-disc list-inside text-[#c2a8f6] text-[22px] leading-[30px] tracking-tight mt-5 text-center" // Adjust styles as needed
    )}>
      <li>It identifies potential in real-time.</li>
      <li>Allows users to take immediate action.</li>
      <li>Protects personal and professional data.</li>
      <li>Proactive approach ensures data security.</li>
      <li>Ensures protection in the evolving digital landscape.</li>
    </ul>
    
  );
}
