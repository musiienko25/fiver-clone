import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/Landing/HomeBanner";
import FiverrBusiness from "@/components/Landing/FiverBusiness";
import Everything from "@/components/Landing/Everything";
import JoinFiver from "@/components/Landing/JoinFiver";
import Companies from "@/components/Landing/Companies";
import PopularServices from "@/components/Landing/PopularServices";
import Services from "@/components/Landing/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBusiness />
      <JoinFiver />
      <Footer />
    </div>
  );
}
