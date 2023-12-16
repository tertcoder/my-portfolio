import { HiArrowSmallRight } from "react-icons/hi2";
import LinkToBtn from "../../ui/LinkToBtn";
import Work from "./Work";
import { motion } from "framer-motion";
import tbr from "../../assets/images/tbr.png";
import wear from "../../assets/images/wear.png";
import portfolio from "../../assets/images/portfolio.png";

const showComponent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

export const showComponentItem = {
  initial: {
    x: -5,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export type WorkType = {
  title: string;
  techs: string[];
  code?: string;
  live?: string;
  design?: string;
  image: string;
};
const works: WorkType[] = [
  {
    title: "TBR Agency",
    techs: ["react", "css"],
    code: "https://github.com/tertcoder/tbr-agency-updated",
    live: "https://tbragency.netlify.app/",
    image: tbr,
  },

  {
    title: "WearStore",
    techs: ["uidesign", "figma"],
    code: "https://github.com/tertcoder/wear-store",
    design:
      "https://www.figma.com/file/heT7dQZ3bg27PW5qg5UIe8/WearShoes?type=design&node-id=0%3A1&mode=design&t=HDDibZFBpJttDmm1-1",
    image: wear,
  },
  {
    title: "My portfolio",
    techs: ["react", "tailwindcss", "figma", "uidesign"],
    code: "https://github.com/tertcoder/my-portfolio",
    live: "https://bontert.netlify.app/",
    design:
      "https://www.figma.com/file/zb60xEqKidkDauu6xj7vO6/Professional-Portfolio?type=design&node-id=0%3A1&mode=design&t=30Pm80clTONhtWq0-1",
    image: portfolio,
  },
];

function Projects() {
  return (
    <motion.div
      variants={showComponent}
      initial="initial"
      animate="animate"
      className="flex max-w-7xl flex-col items-center justify-between py-10"
    >
      <div className="flex w-full flex-1 justify-center gap-7 overflow-x-auto pb-8">
        {works.map((work) => (
          <Work
            key={work.title}
            title={work.title}
            techs={work.techs}
            code={work.code ?? ""}
            live={work.live ?? ""}
            design={work.design ?? ""}
            image={work.image}
            variants={showComponentItem}
          />
        ))}
      </div>

      <LinkToBtn to="/works/experiences" type="secondary">
        <span>See my </span>
        <span className="flex items-center gap-0.5 text-highlight">
          Experience <HiArrowSmallRight />
        </span>
      </LinkToBtn>
    </motion.div>
  );
}

export default Projects;
