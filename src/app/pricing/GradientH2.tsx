import { twMerge } from "tailwind-merge";

export default function GradientH2({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={twMerge(
        className,
        ""
      )}
    >
      {children}
    </h2>
  );
}
