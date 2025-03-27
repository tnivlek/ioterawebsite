import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ShimmerButton({
  children,
  className,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 py-3",
        "transition duration-300 ease-out hover:scale-105",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position] duration-500 ease-in-out group-hover:bg-[position:200%_0,0_0]"></div>
      <div className="relative">{children}</div>
    </button>
  );
} 