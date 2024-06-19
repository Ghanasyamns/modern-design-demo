import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { BeyondDepartment } from "./_components/BeyondDepartment";
import BeyondEmotion from "./_components/BeyondEmotion";
import { BeyondPhase } from "./_components/BeyondPhase";
import { BeyondProduct } from "./_components/BeyondProdcut";
import Blogs from "./_components/Blogs";
import { DesignStrategy } from "./_components/DesignStrategy";
import HeaderBanner from "./_components/HeaderBanner";

export default function Home() {
  return (
    <main className="bg-[--backgrounnd-primary] ">
      <NavBar />
      <HeaderBanner />
      <DesignStrategy />
      <BeyondProduct />
      <BeyondDepartment />
      <BeyondPhase />
      <BeyondEmotion />
      <Blogs />
      <Footer />
    </main>
  );
}
