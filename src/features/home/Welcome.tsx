import LinkToBtn from "../../ui/LinkToBtn";
import { motion } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import react from "../../assets/images/react.png";
import js from "../../assets/images/js.png";
import ts from "../../assets/images/ts.png";
import css from "../../assets/images/css.png";
import html from "../../assets/images/html.png";
import github from "../../assets/images/react.png";
import git from "../../assets/images/git.png";
import figma from "../../assets/images/figma.png";
import vscode from "../../assets/images/vscode.png";
import supabase from "../../assets/images/supabase.png";
import vite from "../../assets/images/vite.png";
import redux from "../../assets/images/redux.png";
import reactQuery from "../../assets/images/reactQuery.png";
import reactRouter from "../../assets/images/reactRouter.png";
import ubuntu from "../../assets/images/ubuntu.png";

const techs: string[][] = [
  ["ReactJS", react],
  ["JavaScript", js],
  ["Typescript", ts],
  ["CSS", css],
  ["HTML", html],
  ["GitHub", github],
  ["GIT", git],
  ["Figma", figma],
  ["VSCode", vscode],
  ["Supabase", supabase],
  ["ViteJS", vite],
  ["Redux", redux],
  ["ReactQuery", reactQuery],
  ["ReactRouter", reactRouter],
  ["Ubuntu", ubuntu],
];

const showComponent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const showComponentItem = {
  initial: {
    y: 5,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
function Welcome() {
  return (
    <motion.div
      variants={showComponent}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center gap-14  pt-10 md:pt-24"
    >
      <div className=" grid w-full place-content-center gap-4 px-2 text-center md:grid-cols-2 md:text-start">
        <motion.div variants={showComponentItem} className="w-full">
          <p className="text-sm font-medium text-secondary">Hello, I do</p>
          <h1 className="  text-4xl font-bold uppercase text-primary ">
            FRONTEND DEVELOPMENT <br /> AND UI DESIGNING
          </h1>
        </motion.div>
        <motion.p
          variants={showComponentItem}
          className=" translate-y-1 self-center text-lg font-medium text-secondary"
        >
          Crafting visually stunning and user-friendly digital experiences.
          Explore my work and discover how I bring creativity and functionality
          together to create impactful websites and interfaces.
        </motion.p>
      </div>

      <LinkToBtn to="/about" type="secondary">
        <span className="font-medium">Learn More </span>
        <span className="flex items-center text-highlight">
          About me <HiArrowSmallRight />
        </span>
      </LinkToBtn>

      <motion.div
        variants={showComponentItem}
        className="flex max-w-2xl flex-wrap justify-center gap-4 px-1 py-4"
      >
        {techs.map((tech) => (
          <img key={tech[0]} src={tech[1]} alt={tech[0]} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Welcome;
