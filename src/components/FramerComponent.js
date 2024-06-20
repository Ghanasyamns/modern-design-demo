"use client";
import { motion } from "framer-motion";

export const BouncingComponent = ({ children }) => {
  const bounce = {
    y: ["10px", "-10px", "10px"],
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
  };

  return (
    <motion.div animate={bounce} style={{ display: "inline-block" }}>
      {children}
    </motion.div>
  );
};

export const OpacityTextAnime = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: "-10px" }}
      animate={{ opacity: 1, scale: 1, y: "0px" }}
      transition={{ duration: 2, ease: "easeIn" }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};
