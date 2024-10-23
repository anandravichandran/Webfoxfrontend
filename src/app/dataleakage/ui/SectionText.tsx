import { twMerge } from "tailwind-merge";

export default function SectionText({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={twMerge(
        className,
        "text-center text-[22px] leading-[30px] tracking-tight text-[#c2a8f6] mt-5"
      )}
    >
      {children}
    </p>
  );
}
