import React, { useTransition } from "react";
import { Parallax } from "./Parallax";
import { motion } from "framer-motion";
interface Props {
  refers: React.RefObject<HTMLDivElement>;
}

export const Contact = ({ refers }: Props) => {
  const line: string = "Open for work!";

  return (
    <div className="h-[85vh] md:h-[75vh] flex justify-center cursor-default mt-32">
      <div
        ref={refers}
        className="h-[50vh] text-2xl md:text-2xl text-white text-center w-[90%] md:w-[60%]"
      >
        <Parallax>
          <div className="text-2xl md:text-7xl mb-8">
            {[...line].map((word, index) => {
              return (
                <motion.span
                  key={index}
                  whileHover={{
                    color: "#fb4f14",
                    transition: { duration: 0.3 },
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        </Parallax>
        <Parallax>
          <div>
            I am currently open for work. If you are interested in my work...
            there is a way to talk!
          </div>
        </Parallax>
        <Parallax>
          <div className="text-[#fb4f14] text-2xl md:text-3xl cursor-pointer my-8">
            <a href="mailto:krystiancichorz708@gmail.com">
              krystiancichorz708@gmail.com
            </a>
          </div>
        </Parallax>
        <Parallax>
          <div>
            You know what to do with it right? I will handle not only your
            positive mails but also critique or advices! If you have any
            commission or propositions... I will be greateful to hear it from
            you!
          </div>
        </Parallax>
      </div>
    </div>
  );
};
