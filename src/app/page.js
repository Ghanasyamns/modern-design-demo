"use client";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import NavBar from "@/components/NavBar";
import { Suspense, useEffect, useState } from "react";
import { BeyondDepartment } from "./_components/BeyondDepartment";
import BeyondEmotion from "./_components/BeyondEmotion";
import { BeyondPhase } from "./_components/BeyondPhase";
import { BeyondProduct } from "./_components/BeyondProdcut";
import Blogs from "./_components/Blogs";
import { DesignStrategy } from "./_components/DesignStrategy";
import dynamic from "next/dynamic";
const DynamicHeaderImages = dynamic(
  () => import("./_components/HeaderImages"),
  {
    loading: () => <div className="h-[400vh]"></div>,
  }
);
export default function Home() {
  const [docEnv, setDocEnv] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setDocEnv(true);
    }
  }, []);

  if (!docEnv) return <Loader />;
  return (
    <Suspense fallback={<Loader />}>
      <main className="bg-[--backgrounnd-primary] ">
        <NavBar />
        {docEnv && <DynamicHeaderImages />}
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
