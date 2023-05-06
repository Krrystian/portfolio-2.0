import { motion } from "framer-motion";
import { useState } from "react";
import { IconContext } from "react-icons";
import { BsLinkedin, BsGithub } from "react-icons/bs";

interface Props {
  setOnClick: (value: boolean) => void;
  onClick: boolean;
  items: string[];
  refers: React.RefObject<HTMLDivElement>[];
}

export const Blackdrop = ({ setOnClick, onClick, items, refers }: Props) => {
  const heightUser: number = window.innerHeight + 1000;
  const widthUser: number = window.innerWidth + 1000;
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  const scrollIntoSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <div className="absolute h-full w-full flex justify-center items-center">
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={onClick ? { width: widthUser, height: heightUser } : {}}
        transition={{ duration: 0.5 }}
        onAnimationComplete={() => setAnimationCompleted(!animationCompleted)}
        className="fixed bg-[rgba(0,0,0,0.93)] rounded-full z-[4] flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={
            animationCompleted
              ? onClick
                ? { opacity: 1, visibility: "visible" }
                : {}
              : {}
          }
          transition={{ duration: 0.4 }}
          className="text-white"
        >
          <div className="text-2xl">
            {items.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className="mb-4 cursor-pointer"
                  whileHover={{ color: "#fb4f14", scale: 1.2 }}
                >
                  <a
                    onClick={() => {
                      scrollIntoSection(refers[index]);
                      setOnClick(!onClick);
                    }}
                  >
                    {item}
                  </a>
                </motion.div>
              );
            })}
            <div className="flex justify-between">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <motion.a href="" whileHover={{ color: "#fb4f14", scale: 1.2 }}>
                  <BsGithub />
                </motion.a>
                <motion.a href="" whileHover={{ color: "#fb4f14", scale: 1.2 }}>
                  <BsLinkedin />
                </motion.a>
              </IconContext.Provider>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
