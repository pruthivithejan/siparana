import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <h1 className="text-5xl md:text-6xl font-bold text-center lg:text-7xl lg:text-left three-d text-emerald-500 dark:text-emerald-500">
            සිප් අරණ <br />{" "}
            <span className="dark:text-slate-300 text-slate-800">
              අධ්‍යාපන සත්කාරය
            </span>
          </h1>
          <h3 className="text-3xl md:text-4xl font-semibold text-center lg:text-left three-d text-slate-700 dark:text-slate-300">
            කලාප අධ්‍යාපන කාර්යාලය - අම්පාර
          </h3>
          <p className="lg:text-left max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center">
            දැනුම තුළින් යහපත් සමාජයක් උදෙසා, අම්පාර අධ්‍යාපන කලාපයේ පමණක් නොව
            මුලු සිරිලක දැයේ දරුවන්හට පිදෙන අධ්‍යාපන සත්කාරයයි !
          </p>
          <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow "
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/classroom.png"
              alt="Classroom illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
