import Hero from "@/features/landing/Hero";
import Navbar from "@/features/landing/Navbar/navbar";

export default function Home() {
  return (
    <main
      className="
      h-screen 
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
        <Navbar />
        <Hero />
      </section>
    </main>
  );
}
