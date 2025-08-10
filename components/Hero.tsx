import Image from "next/image";
import Link from "next/link";
import { getStaticImage } from "@/lib/images";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-28 md:py-36">
      <div className="container max-w-4xl w-full mx-auto flex flex-col items-center text-center gap-6 px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold three-d text-emerald-500 dark:text-emerald-500 leading-tight">
          සිප් අරණ <br />
          <span className="dark:text-slate-300 text-slate-800">අධ්‍යාපන සත්කාරය</span>
        </h1>
        <h3 className="text-3xl md:text-4xl font-semibold three-d text-slate-700 dark:text-slate-300">
          කලාප අධ්‍යාපන කාර්යාලය - අම්පාර
        </h3>
        <p className="max-w-prose text-slate-700 dark:text-slate-300 mb-2">
          දැනුම තුළින් යහපත් සමාජයක් උදෙසා, අම්පාර අධ්‍යාපන කලාපයේ පමණක් නොව මුලු සිරිලක දැයේ දරුවන්හට පිදෙන අධ්‍යාපන සත්කාරයයි !
        </p>
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
          <Image
            priority
            className="img-shadow"
            quality={100}
            style={{ objectFit: "contain" }}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 400px"
            src={getStaticImage("illustration")}
            alt="Classroom illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
