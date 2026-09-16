import type { Metadata } from "next";
import "../assets/styles/globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Front-End Developer Portfolio",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
