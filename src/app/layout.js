import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gym blog app",
  description: "Find your workout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[url(../../public/bg.jpg)] max-w-2xl px-3 mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
