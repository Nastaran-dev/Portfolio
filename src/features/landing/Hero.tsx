"use client";
import Image from "next/image";
import nastaran from "@/assets/images/nastaran.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { defaultTransition } from "@/animations/transitions";
import { useHeroParallax } from "@/animations/hooks";

export default function Hero() {
  const { ref, style } = useHeroParallax();
  return (
    <motion.section
      className="flex flex-col lg:flex-row w-full items-center justify-center px-4 "
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={defaultTransition}
      ref={ref}
      style={style}
    >
      <div className=" flex flex-col gap-lg w-full  lg:w-1/2 md:p-16 xl:p-28 mt-4 md:mt-0">
        <div className="flex flex-col gap-3   w-full ">
          <h1 className="text-3xl text-white font-semibold w-full md:text-5xl">
            Hi, I’m Nastaran
          </h1>

          <h4
            className="
            text-xl 
            bg-color-gradient 
            bg-clip-text 
            text-transparent
           
            md:text-3xl
           
           
          "
          >
            Front-End Developer.
          </h4>
        </div>

        <p
          className="
          text-white 
          text-md
          leading-7
          font-normal
         
        "
        >
          A self-taught front-end developer with over 2 months of experience, I
          build responsive and user-friendly websites & app. I focus on clean
          code and efficient design, ensuring seamless interactions that align
          with both user expectations and business objectives.
        </p>

        <motion.div
          whileHover={{
            scale: 1.05,
            translateY: 15,
          }}
          transition={defaultTransition}
        >
          <Button variant="default">Contact</Button>
        </motion.div>
      </div>

      <div className="flex justify-center w-full lg:w-1/2">
        <Image
          src={nastaran}
          alt="Nastaran profile"
          width={999}
          height={759}
          priority
          className="rounded-2xl p-md w-full h-auto md:w-149"
        />
      </div>
    </motion.section>
  );
}
