"use client";
import { cn } from "@/lib/utils";
import { useScrollTop } from "../../../../hooks/useScrollTop";
import Logo from "./logo";
import { ModeToggle } from "@/components/modoToggle";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#161616]",
        scrolled &&
          "border-b dark:bg-[#1f1f1fce] bg-white/70 backdrop-blur-md shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 ">
        Login
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
