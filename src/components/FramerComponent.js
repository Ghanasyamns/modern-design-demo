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
      initial={{ opacity: 0, y: "30px" }}
      animate={{ opacity: 1, y: "0px" }}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};
