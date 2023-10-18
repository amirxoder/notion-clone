import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center ">
        <div
          className="relative w-[300px] h-[300px] sm:h-[350px] sm:w-[350px]
        md:h-[400px] md:w-[400px]"
        >
          <Image
            src={"/documents.png"}
            className="dark:hidden"
            fill
            alt="document"
          />
          <Image
            src={"/documents-dark.png"}
            className="hidden dark:block"
            fill
            alt="document"
          />
        </div>

        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src={"/reading.png"}
            alt="reading"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src={"/reading-dark.png"}
            alt="reading"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
