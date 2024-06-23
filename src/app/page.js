import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import { Suspense } from "react";
import { BeyondDepartment } from "./_components/BeyondDepartment";
import BeyondEmotion from "./_components/BeyondEmotion";
import { BeyondPhase } from "./_components/BeyondPhase";
import { BeyondProduct } from "./_components/BeyondProdcut";
import Blogs from "./_components/Blogs";
import { DesignStrategy } from "./_components/DesignStrategy";
import { HeaderImages } from "./_components/HeaderImages";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="bg-[--backgrounnd-primary] ">
        <NavBar />
        <HeaderImages />
        <DesignStrategy />
        <BeyondProduct />
        <BeyondDepartment />
        <BeyondPhase />
        <BeyondEmotion />
        <Blogs />
        <Footer />
      </main>
    </Suspense>
  );
}
