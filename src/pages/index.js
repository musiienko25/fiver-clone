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
import AuthWrapper from "@/components/AuthWrapper";

import { useStateProvider } from "../context/StateContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [{ showLoginModal }] = useStateProvider();
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
      <AuthWrapper />
    </div>
  );
}
