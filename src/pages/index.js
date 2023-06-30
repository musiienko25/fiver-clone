import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/Landing/HomeBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <HomeBanner />
      <Footer />
    </main>
  );
}
