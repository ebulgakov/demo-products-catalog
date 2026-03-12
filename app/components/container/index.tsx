import type { HTMLProps, ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type ContainerProps = HTMLProps<HTMLDivElement> &{
  children: ReactNode;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("rounded-[10px] bg-white p-7.5", className)}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default Container;
