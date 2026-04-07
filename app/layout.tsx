import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nejra Mujezinović | Polyglot Engineer",
  description:
    "Polyglot Engineer bridging Web Development (React/Angular), Backend (Spring Boot/Node.js), and Robotics (OpenCV/Arduino).",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
