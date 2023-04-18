import { motion } from "framer-motion";
import React from "react";
import { Parallax } from "./Parallax";
export const Projects = () => {
  type cardProps = {
    image: string;
  };
  const Card = ({ image }: cardProps) => {
    return (
      <motion.div className="">
        <div className="bg-transparent border h-full">
          <img src={image} className=" object-fill rounded-3xl" />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="h-[100vh] text-white flex justify-center text-center text-6xl">
      {/* <Parallax> */}
      <div className="h-[60vh] w-[40%] border flex justify-center flex-row gap-5">
        <Card image="photos/steak-shop.png" />
      </div>
      {/* </Parallax> */}
    </div>
  );
};
