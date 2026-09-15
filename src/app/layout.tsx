import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Front-End Developer Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
