import { motion } from "framer-motion";
import { Parallax } from "./Parallax";
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
//Obrazki w roznym tempie pojawiaja sie na ekranie oraz po kliknięciu wyświetlają moduły.

//KONTAKT - Pomysł: Wyświetlenie informacji na środku o mozliwosci kontaktu ze mną oraz na dole
//po czasie animacja strzałki kontaktującej do mnie

export const Projects = () => {
  let [element, setElement] = useState<number>(0);
  useEffect(() => setElement(0), []);
  const items = [
    {
      name: "Steak Restaurant",
      image: "photos/steak-shop.png",
      description:
        "Example restaurant website project. I chose steak restaurants as a target because when I started the project I wanted to eat a tasty meat. (I also wanted to learn React) It is my first project using React library and Tailwind",
      technology: "React | Typescript | Tailwind | Vite | React Router",
      github: "https://github.com/Krrystian/steak-house-website",
      website: "https://krrystian.github.io/steak-house-website/",
    },
    {
      name: "Tech-Gear-Shop",
      image: "photos/tech-shop.png",
      description:
        "Example shop uni-project to satisfy lecturer. It's my first project, introduction to JavaScript, first framework, storages. There's nothing fancy about that project. ",
      technology: "JavaScript | Bootstrap",
      github: "https://github.com/Krrystian/MysteryBox-Shop",
      website: "https://krrystian.github.io/MysteryBox-Shop/",
    },
  ];
  type cardProps = {
    name: string;
    image: string;
    description: string;
    technology: string;
    github: string;
    website: string;
    index: number;
  };
  const Card = ({
    image,
    name,
    description,
    technology,
    github,
    website,
    index,
  }: cardProps) => {
    return (
      <motion.div
        key={index}
        className={
          index === element
            ? "bg-transparent rounded-3xl w-[80%] absolute"
            : "hidden"
        }
      >
        <p className="mb-4 text-3xl lg:text-6xl text-[#fb4f14]">{name}</p>
        <div className="text-2xl flex justify-between mb-4 lg:hidden ">
          <motion.a href={github} whileHover={{ color: "#fb4f14" }}>
            GitHub
          </motion.a>
          <motion.a href={website} whileHover={{ color: "#fb4f14" }}>
            Website
          </motion.a>
        </div>
        <div className="h-full overflow-hidden flex justify-center gap-5 rounded-3xl">
          <img
            src={image}
            className="object-cover brightness-75 shadow-slate-950 shadow-2xl lg:w-[35%]"
          />
          <div className="hidden lg:flex text-xl flex-col">
            <h3 className="text-4xl mt-10 md:mt-6 mb-3">Description</h3>
            <p>{description}</p>
            <h3 className="text-4xl mt-10 mb-3">Technology</h3>
            <p>{technology}</p>
            <div className="flex justify-center gap-20 text-3xl mt-10">
              <motion.a
                href={github}
                whileHover={{ scale: 1.2, color: "#fb4f14" }}
              >
                GitHub
              </motion.a>
              <motion.a
                href={website}
                whileHover={{ scale: 1.2, color: "#fb4f14" }}
              >
                Website
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className=" h-[100vh] text-white flex justify-center text-6xl">
      <div className="h-[70vh] flex justify-center text-center relative">
        <Parallax>
          <motion.div
            className={
              "absolute cursor-pointer flex left-[-10%] lg:left-0 items-center h-[70vh] bg-[rgba(0,0,0,0.35)] rounded-2xl z-[1]"
            }
            initial={{ opacity: 1 }}
            animate={element === 0 ? { opacity: 0 } : {}}
            whileHover={{ scale: 1.05, color: "#fb4f14" }}
            onClick={() => {
              setElement((element) => element - 1);
            }}
          >
            <MdKeyboardArrowLeft />
          </motion.div>
          <motion.div
            className="absolute cursor-pointer flex right-[-10%] lg:right-0 items-center h-[70vh] bg-[rgba(0,0,0,0.35)] rounded-2xl z-[1]"
            initial={{ opacity: 0 }}
            animate={element !== items.length - 1 ? { opacity: 1 } : {}}
            whileHover={{ scale: 1.05, color: "#fb4f14" }}
            onClick={() => {
              setElement((element) => element + 1);
            }}
          >
            <MdKeyboardArrowRight />
          </motion.div>

          <div className="h-[70vh] w-[80vw] flex justify-center text-center relative overflow-hidden">
            {items.map((item, index) => (
              <Card
                index={index}
                name={item.name}
                image={item.image}
                description={item.description}
                technology={item.technology}
                github={item.github}
                website={item.website}
              />
            ))}
          </div>
        </Parallax>
      </div>
    </div>
  );
};
