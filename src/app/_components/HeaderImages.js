"use client";
import useScrollImageSequenceFramerCanvas from "@/hooks/useScrollImageSequenceFramerCanvas";
import { Button } from "@mui/material";
import { motion, useTransform } from "framer-motion";
import localFont from "next/font/local";
import { useMemo, useRef } from "react";
import { LearnMoreIocn, PlayButton } from "./icons/CustomIcons";

const sfpro = localFont({
  src: "../(styles)/fonts/SF-Pro-Display-Regular.ttf",
});
export const HeaderImages = () => {
  const createImage = (src) => {
    if (typeof window === "undefined") {
      const img = document?.createElement("img");
      img.src = "/assets/image_seq/ezgif-frame-1.jpg";
      return img;
    } else {
      const img = document?.createElement("img");
      img.src = src;
      return img;
    }
  };
  const handleDrawCanvas = (img, ctx) => {
    const canvas = ctx.canvas;
    const widthRatio = canvas.width / img.width;
    const heightRatio = canvas.height / img.height;
    const ratio = Math.max(widthRatio, heightRatio);
    const centerX = (canvas.width - img.width * ratio) / 2;
    const centerY = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerX,
      centerY,
      img.width * ratio,
      img.height * ratio
    );
  };

  const keyframes = useMemo(
    () =>
      [...new Array(41)].map((_, i) =>
        createImage(`/assets/image_seq/ezgif-frame-${i + 1}.jpg`)
      ),
    []
  );

  const containerRef = useRef(null);
  const [progress, canvasRef] = useScrollImageSequenceFramerCanvas({
    onDraw: handleDrawCanvas,
    keyframes: keyframes,
    scrollOptions: {
      target: containerRef,
      offset: ["start", "end"],
    },
  });

  // We know that the entire animation spans across 4 screen height.
  const opacity = useTransform(progress, [0, 0.25, 0.5], [0, 1, 1]);
  const scale = useTransform(progress, [0, 0.25, 0.5], [0.95, 1, 1]);
  return (
    <div ref={containerRef} className="h-[400vh] w-[100vw]">
      <div className="sticky top-[60px] left-0">
        <canvas ref={canvasRef} className="absolute left-0 inset-0 block" />
        <motion.div
          style={{ opacity, scale }}
          className="mx-auto flex  flex-col h-screen  items-center justify-center px-12"
        >
          <div className="z-[4] ">
            <h1>
              <p className="text-[24px] md:text-[48px] font-medium mt-[340px]  z-[4] text-center">
                It&apos;s not just a design system it&apos;s <br /> a vision
                brought to life.
              </p>
            </h1>
          </div>
          <p
            className={`text-[14px] md:text-[16px] font-normal z-[4] text-center  mt-[24px] ${sfpro.className}`}
          >
            Design-first solutions for fintech pioneers!. A small contribution
            <br /> from the small group
          </p>
          <div className="flex gap-[50px] mt-[36px]">
            <Button
              style={sfpro.style}
              className="!text-[12px] !md:text-[16px]"
              variant="text"
              startIcon={<PlayButton />}
            >
              Watch Video
            </Button>
            <Button
              style={sfpro.style}
              className="!text-[12px] !md:text-[16px]"
              variant="text"
              startIcon={<LearnMoreIocn />}
            >
              Learn more
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
