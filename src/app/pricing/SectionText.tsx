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
        "text-left text-[22px] leading-[30px] tracking-tight text-[#e2e3e7] mt-[70px]",
      )}
    >
      {children}
    </p>
  );
}
