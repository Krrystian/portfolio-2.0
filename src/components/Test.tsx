import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Test = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["end end", "start start"],
  });
  const scroll = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [0, 1, 1, 0]);
  return (
    <>
      <div className="h-[250vh] flex justify-center">
        <div className="bg-white h-[300px] w-[300px] flex justify-center items-center"></div>
        <motion.div
          initial={{ opacity: 0 }}
          style={{ opacity: scroll, scale: 1.1 }}
          viewport={{ root: scrollRef }}
          transition={{ duration: 1 }}
          className="bg-white w-[70vh] border-8 border-orange-900 h-56 mt-[120vh]"
        >
          Hello
        </motion.div>
      </div>
    </>
  );
};
