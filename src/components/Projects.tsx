import { motion } from "framer-motion";
import { Parallax } from "./Parallax";
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
interface Props {
  refers: React.RefObject<HTMLDivElement>;
}
export const Projects = ({ refers }: Props) => {
  let [element, setElement] = useState<number>(0);
  useEffect(() => setElement(0), []);
  const items = [
    {
      name: "MERN Todo",
      image: "photos/mern-todo.png",
      description:
        "Simple website to learn authorization and token passing via cookies, deployed on Vercel. Make sure you have 3rd party cookies allowed!",
      technology: "React | MongoDB | Express | NodeJS | Redux",
      github: "https://github.com/Krrystian/mern-todo",
      website: "https://mern-todo-frontend-nine.vercel.app",
    },
    {
      name: "MERN Blog",
      image: "photos/mern-blog.png",
      description:
        "Simple blog project using MERN stack. The goal of this project was simple - learn MERN stack. I also tried to use Figma for spacing in web's simple design.",
      technology: "React | MongoDB | Express | NodeJS | Redux",
      github: "https://github.com/Krrystian/mern-blog",
      website: "https://mern-blog-frontend-krrystian.vercel.app",
    },
    {
      name: "Dog Shop",
      image: "photos/dog-shop.png",
      description:
        "Online shop, make orders, new accounts... add products and more! Simple full-stack project: NextJS, Prisma, MongoDB. I also tried to use Figma for spacing in web's simple design.",
      technology: "React | Typescript | Tailwind | Vite | React Router",
      github: "https://github.com/Krrystian/dog-shop",
      website: "https://dog-shop-flame.vercel.app",
    },
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
    {
      name: "Portfolio v1",
      image: "photos/portfolio.png",
      description:
        "My first protfolio that has nothing to do with website styling, but it was my first attempt to make a website. I mostly used plain CSS and HTML with JavaScript to complete it. It's not mobile first =C",
      technology: "JavaScript | HTML | CSS",
      github: "https://github.com/Krrystian/Portfolio",
      website: "https://krrystian.github.io/Portfolio",
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
        initial={{ opacity: 0 }}
        animate={index === element ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className={
          index === element
            ? "bg-transparent rounded-3xl w-[80%] absolute z-0"
            : "bg-transparent rounded-3xl w-[80%] absolute z-[-1]"
        }
      >
        <p className="mb-4 text-3xl xl:text-6xl text-[#fb4f14]">{name}</p>
        <div className="text-2xl flex justify-between mb-4 xl:hidden ">
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
            className="object-cover brightness-75 shadow-slate-950 shadow-2xl xl:w-[35%]"
          />
          <div className="hidden xl:flex text-xl flex-col">
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
    <div className=" h-[80vh] text-white flex justify-center text-6xl">
      <div
        ref={refers}
        className="h-[70vh] flex justify-center text-center relative"
      >
        <Parallax noOpacity>
          <motion.div
            className={
              element !== 0
                ? "absolute cursor-pointer flex left-[-10%] xl:left-[4%] items-center h-[70vh] rounded-2xl z-[1]"
                : "absolute cursor-default flex left-[-10%] xl:left-[4%] items-center h-[70vh] rounded-2xl z-[1]"
            }
            initial={{ opacity: 1 }}
            animate={element === 0 ? { opacity: 0 } : {}}
            whileHover={{ scale: 1.2, color: "#fb4f14" }}
            onClick={() => {
              setElement((element) => (element > 0 ? element - 1 : element));
            }}
          >
            <MdKeyboardArrowLeft />
          </motion.div>
          <motion.div
            className={
              element !== items.length - 1
                ? "absolute cursor-pointer flex right-[-10%] xl:right-[4%] items-center h-[70vh] rounded-2xl z-[1]"
                : "absolute cursor-default flex right-[-10%] xl:right-[4%] items-center h-[70vh] rounded-2xl z-[1]"
            }
            initial={{ opacity: 0 }}
            animate={element !== items.length - 1 ? { opacity: 1 } : {}}
            whileHover={{ scale: 1.2, color: "#fb4f14" }}
            onClick={() => {
              setElement((element) =>
                element < items.length - 1 ? element + 1 : element
              );
            }}
          >
            <MdKeyboardArrowRight />
          </motion.div>

          <div className="h-[70vh] w-[80vw] flex justify-center text-center relative overflow-hidden">
            {items.map((item, index) => (
              <Card
                key={index}
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
