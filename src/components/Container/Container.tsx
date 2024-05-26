import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TChildren = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TChildren) => {
  return (
    <div
      className={cn(
        `w-full lg:max-w-[1220px] xl:max-w-[1420px] mx-auto px-[20px]`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
