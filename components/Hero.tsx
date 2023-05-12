import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <h1 className="text-5xl md:text-6xl lg:text-7xl three-d text-emerald-500 dark:text-emerald-500">
            Easily determine <br /> text similarity.
          </h1>
          <p className="lg:text-left max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center">
            With the Text Similarity API, you can easily determine the
            similarity between two pieces of text with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-black dark:text-emerald-500"
            >
              API key
            </Link>
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
