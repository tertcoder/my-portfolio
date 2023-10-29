import LinkToBtn from "../../ui/LinkToBtn";
import { motion } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";

const techs: string[][] = [
  ["ReactJS", "../src/assets/images/react.png"],
  ["JavaScript", "../src/assets/images/js.png"],
  ["Typescript", "../src/assets/images/ts.png"],
  ["CSS", "../src/assets/images/css.png"],
  ["HTML", "../src/assets/images/html.png"],
  ["GitHub", "../src/assets/images/github.png"],
  ["GIT", "../src/assets/images/git.png"],
  ["Figma", "../src/assets/images/figma.png"],
  ["VSCode", "../src/assets/images/vscode.png"],
  ["Supabase", "../src/assets/images/supabase.png"],
  ["ViteJS", "../src/assets/images/vite.png"],
  ["Redux", "../src/assets/images/redux.png"],
  ["ReactQuery", "../src/assets/images/reactQuery.png"],
  ["ReactRouter", "../src/assets/images/reactRouter.png"],
  ["Ubuntu", "../src/assets/images/ubuntu.png"],
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
