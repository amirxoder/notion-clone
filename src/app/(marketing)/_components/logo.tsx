import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        className="dark:hidden"
        src={"/logo.svg"}
        alt={"Jotion"}
        height={"40"}
        width={"40"}
      />
      <Image
        className="hidden dark:block"
        src={"/logo-dark.svg"}
        alt={"Jotion"}
        height={"40"}
        width={"40"}
      />
      <p className={cn("font-black", font.className)}>Jotion</p>
    </div>
  );
};

export default Logo;
