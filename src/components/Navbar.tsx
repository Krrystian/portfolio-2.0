import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Hamburger } from "./Hamburger";
import { Blackdrop } from "./Blackdrop";
interface Props {
  refers: React.RefObject<HTMLDivElement>[];
}

export const Navbar = ({ refers }: Props) => {
  const [onHover, setOnHover] = useState<boolean>(false);
  const [onClick, setOnClick] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { scrollY } = useScroll();

  const scrollIntoSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  useMotionValueEvent(scrollY, "change", (position) =>
    setScrollPosition(position)
  );
  const items = [
    "01. Main",
    "02. About",
    "03. Skills",
    "04. Project",
    "05. Contact",
  ];
  return (
    <>
      <div className="fixed flex flex-col z-[9999] items-start mt-6 ml-6 text-2xl text-white">
        <ul className="xl:block hidden">
          {items.map((item, index) => {
            return (
              <motion.li
                key={index}
                className="mb-2 cursor-pointer"
                whileHover={{ color: "#fb4f14", scale: 1.2 }}
              >
                <a onClick={() => scrollIntoSection(refers[index])}>{item}</a>
              </motion.li>
            );
          })}
        </ul>
        <div className="xl:hidden">
          <Hamburger
            setOnClick={setOnClick}
            onClick={onClick}
            setOnHover={setOnHover}
            onHover={onHover}
          />
        </div>
      </div>
      <Blackdrop
        onClick={onClick}
        setOnClick={setOnClick}
        items={items}
        refers={refers}
      />
      <motion.div
        className="fixed z-[3] bottom-0 text-neutral-200 mb-6 ml-6 text-2xl invisible xl:visible"
        initial={{ opacity: 0 }}
        animate={scrollPosition > window.innerHeight / 2 ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <p>Krystian Cichorz</p>
        <div className="flex justify-between text-xl text-neutral-400">
          <motion.a href="https://github.com/Krrystian" whileHover={{ scale: 1.4, color: "#fb4f14" }}>
            GitHub
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/krystian-cichorz-647618207/" whileHover={{ scale: 1.4, color: "#fb4f14" }}>
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};
