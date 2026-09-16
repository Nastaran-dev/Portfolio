import Image from "next/image";
import nastaran from "@/assets/images/nastaran.png";
import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <div className="w-full flex justify-center px-xl items-center">

      <div className="w-1/2 flex flex-col gap-lg p-28">

        <div className="flex flex-col gap-3">

          <h1 className="text-6xl text-white font-semibold">
            Hi, I’m Nastaran
          </h1>


          <h4 className="
            text-4xl 
            bg-color-gradient 
            bg-clip-text 
            text-transparent
          ">
            Front-End Developer.
          </h4>

        </div>


        <p className="
          text-white 
          text-lg 
          leading-8
          font-normal
        ">
          A self-taught front-end developer with over 2 months of experience,
          I build responsive and user-friendly websites & app.
          I focus on clean code and efficient design, ensuring seamless
          interactions that align with both user expectations and business objectives.
        </p>


        <Button
          variant="default"
          size="default"
          className="capitalize w-fit"
        >
          contact
        </Button>

      </div>


      <div className="w-1/2 flex justify-center">

        <Image
          src={nastaran}
          alt="Nastaran profile"
          width={596}
          height={145}
          priority
          className="rounded-2xl p-md"
        />

      </div>

    </div>
  );
}