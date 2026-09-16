"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import Rectangle from "@/assets/images/Rectangle.png";
import { navigationItems } from "@/constant/navigation";
import { motion } from "framer-motion";
import { defaultTransition } from "@/animations/transitions";
import { navVariants } from "@/animations/navVariants";

export default function navbar() {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={defaultTransition}
      className= 'hidden lg:flex'
    >
      <NavigationMenu className="max-w-none uppercase">
        <NavigationMenuList className="flex gap-7xl items-center">
          {navigationItems.slice(0, 2).map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.href}
                className="text-lg text-white font-inter tracking-widest"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <Image
              className="mt-md"
              src={Rectangle}
              alt="Nastaran logo"
              width={196}
              height={45}
              priority
            />
          </NavigationMenuItem>

          {navigationItems.slice(2).map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.href}
                className="text-lg text-white"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  );
}
