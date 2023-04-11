import React, { useState } from "react";
import { Sentence } from "./Sentence";
import { Parallax } from "./Parallax";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const line1 = "Hello";
  const line2 = "I'm Krystian";
  const line3 = "Junior Web Developer";

  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);
  const [animationCompleted2, setAnimationCompleted2] =
    useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const yValue1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 0]);
  const yValue2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, -400, 0]);

  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center cursor-default z-[1]">
        <Parallax>
          <div className="flex flex-col justify-between relative h-[40px] w-full">
            <motion.div style={{ y: yValue1 }}>
              <Sentence
                specs="text-neutral-400 text-5xl text-center md:text-[10rem] absolute w-full top-[-50px] md:top-[-175px]"
                line={line1}
                animationComplete={() => setAnimationCompleted(true)}
              />
            </motion.div>
            {animationCompleted && (
              <motion.div style={{ y: yValue2 }}>
                <Sentence
                  specs="text-white text-4xl text-center md:text-7xl"
                  line={line2}
                  animationComplete={() => setAnimationCompleted2(true)}
                />
              </motion.div>
            )}
            {animationCompleted2 && (
              <Sentence
                specs="text-neutral-400 text-xl text-center md:text-3xl absolute w-full top-[40px] md:top-[100px]"
                line={line3}
              />
            )}
          </div>
        </Parallax>
      </div>
    </>
  );
};
