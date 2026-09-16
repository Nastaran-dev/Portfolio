import type { Metadata } from "next";
import "../assets/styles/globals.css";
import { Josefin } from "@/assets/fonts/JosefinSans/fonts";
import { Inter } from "@/assets/fonts/Inter/fonts";
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Front-End Developer Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa">
      <body className={`${Inter.variable} ${Josefin.variable} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
