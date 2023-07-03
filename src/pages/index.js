import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/Landing/HomeBanner";
import FiverrBusiness from "@/components/Landing/FiverBusiness";
import Everything from "@/components/Landing/Everything";
import JoinFiver from "@/components/Landing/JoinFiver";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <HomeBanner />
      {/* <Footer /> */}
      {/* <FiverrBusiness /> */}
      {/* <Everything /> */}
      <JoinFiver />
    </main>
  );
}
