import Hero from "@/features/landing/Hero";
import Navbar from "@/features/landing/Navbar/navbar";
import { HdIcon } from "lucide-react";
import { TextAlignStart } from "lucide-react";

export default function Home() {
  return (
    <main
      className="
      h-[200vh]
      bg-[#150b33] 
      w-full 
      font-josefin
    "
    >
      <section
        className="
        bg-landing-gradient 
       
        rounded-md 
        mx-lg 
        my-sm
      "
      >
        <div className="w-full flex justify-end lg:hidden p-md">
          <TextAlignStart className="text-white" />
        </div>

        <Navbar />
        <Hero />
      </section>
    </main>
  );
}
