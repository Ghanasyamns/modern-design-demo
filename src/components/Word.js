"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import localFont from "next/font/local";
import { useRef } from "react";
const sfpro = localFont({
  src: "../app/(styles)/fonts/SF-Pro-Display-Regular.ttf",
});
export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.6", "end"],
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className={` max-w-[628px] flex flex-wrap  text-[18px] md:text-[44px] ${sfpro.className}  font-normal mt-[48px]  px-4 md:px-0`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[10px]">
      <span className="absolute opacity-[.2]">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
