import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax } from "./Parallax";
import { useEffect, useRef, useState } from "react";
interface Props {
  refersA: React.RefObject<HTMLDivElement>;
  refersB: React.RefObject<HTMLDivElement>;
}
export const About = ({ refersA, refersB }: Props) => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [hover, setHover] = useState<number>(-1);
  const items = [
    {
      heading: "FRONTEND",
      list: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
      heading: "OTHER",
      list: ["SQL", "JAVA", "C++"],
    },
    {
      heading: "TOOLS",
      list: ["Tailwind", "Bootstrap", "Framer Motion", "TypeScript"],
    },
  ];

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const scrollValue = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 1],
    [20, 30, 0, 0]
  );
  useEffect(() => {
    const update = () => {
      return setScrollPosition(scrollYProgress.get());
    };
    update();
    return scrollYProgress.on("change", update);
  });

  const line = "Essential Skills";
  return (
    <>
      <div className="h-[50vh] flex flex-col z-[1] text-center cursor-default">
        <Parallax>
          <motion.div
            ref={refersA}
            className="text-white md:mx-48 mx-6 text-2xl xl:text-3xl"
          >
            <motion.p ref={scrollRef} style={{ y: scrollValue }} className="">
              Creative,&nbsp;
              <motion.span
                animate={
                  scrollPosition > 0.1 && scrollPosition < 0.9
                    ? { color: "#fb4f14" }
                    : {}
                }
                transition={{ duration: 1 }}
              >
                Website Designer
              </motion.span>
              , taking first career steps. I put user on the first place to
              guarantee great experience. I like to explore new fields, overcome
              my anxieties. The best feeling is when you have an idea and you
              try to execute it.
            </motion.p>
          </motion.div>
        </Parallax>
      </div>

      <div
        ref={refersB}
        className="h-[60vh] flex flex-col text-center text-white md:mx-24 mt-32 mx-6 cursor-default"
      >
        <Parallax>
          <h2 className="md:text-7xl xl:text-8xl text-3xl flex flex-col md:flex-row justify-center border-b-2 md:border-none border-[#fb4f14]">
            {line.split(" ").map((word, index) => {
              return (
                <motion.div
                  key={index}
                  animate={hover == index * 2 ? { color: "#fb4f14" } : {}}
                  transition={{ duration: 1 }}
                  className="md:mb-6 md:m-4 m-1"
                >
                  {word}
                </motion.div>
              );
            })}
          </h2>
        </Parallax>
        <Parallax>
          <div className="grid sm:grid-cols-3 grid-cols-2">
            {items.map((item, index) => {
              return (
                <motion.div
                  key={index + item.heading}
                  onHoverStart={() => setHover(index)}
                  onHoverEnd={() => setHover(-1)}
                  whileHover={{ rotate: Math.floor(Math.random() * 21) - 10 }}
                  className={
                    index == 2
                      ? "flex flex-col sm:col-span-1 col-span-2 "
                      : "flex flex-col"
                  }
                >
                  <h3 className="md:text-5xl text-2xl  m-3">{item.heading}</h3>
                  <ul className="text-neutral-300">
                    {item.list.map((element, index) => {
                      return (
                        <li
                          className="md:text-md text-xl "
                          key={element + index}
                        >
                          {element}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </Parallax>
      </div>
    </>
  );
};
