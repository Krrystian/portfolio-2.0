import { motion } from "framer-motion";
import React from "react";
//FABIANO INFINITE SCROLL FIND GOOD SCROLL
export const Projects = () => {
  const Card = () => {
    return (
      <motion.div className="border w-[30%]">
        <div className="bg-black h-full"></div>
        <p></p>
      </motion.div>
    );
  };

  return (
    <div className="h-[50vh] text-white flex justify-center text-center text-6xl">
      <div className="border h-full w-full flex justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
