import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
interface Props {
  children: ReactNode;
}

export const Parallax = ({ children }: Props) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["end end", "start start"],
  });
  const scroll = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 0]);
  return (
    <>
      <motion.div
        style={{ opacity: scroll, scale: 1 }}
        ref={scrollRef}
        transition={{ duration: 1 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  );
};
