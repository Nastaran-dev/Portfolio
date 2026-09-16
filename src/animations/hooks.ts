import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useHeroParallax() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return {
    ref,
    style: {
      y,
      scale,
      opacity,
    },
  };
}
