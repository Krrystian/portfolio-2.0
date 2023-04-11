import { motion } from "framer-motion";
import React from "react";

interface Prop {
  line: string;
  specs: string;
  animationComplete?: () => void;
}

export const Sentence = ({ line, specs, animationComplete }: Prop) => {
  //Animate sentence
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delay: 0.5 },
    },
  };

  //Animate letter
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.h1
      className={specs}
      variants={sentence}
      initial="hidden"
      animate="visible"
      onAnimationComplete={animationComplete}
    >
      {line.split("").map((char, index) => {
        return (
          <motion.span
            key={char + index}
            variants={letter}
            whileHover={{ color: "#fb4f14" }}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};
