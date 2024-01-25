import { HiArrowSmallRight } from "react-icons/hi2";
import LinkToBtn from "../../ui/LinkToBtn";
import { motion } from "framer-motion";
const techs: string[] = [
  "html/css",
  "javascript",
  "reactjs",
  "typescript",
  "dart",
  "flutter",
  "firebase",
  "supabase",
  "git/github",
  "figma",
];

const showComponent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.2,
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
export const showComponentTag = {
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

function Me() {
  return (
    <motion.div
      variants={showComponent}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-between py-10"
    >
      <div className="mb-8 flex flex-col items-center gap-12">
        <motion.div
          variants={showComponentItem}
          className="max-w-xl text-center"
        >
          <p className="text-lg font-medium text-secondary">I'm</p>
          <h2 className="mb-4 text-3xl font-semibold text-primary">
            Bon Tertius T.
          </h2>
          <p className="text-lg font-medium text-secondary">
            A young and dynamic Burundian specialized in Frontend web
            development and UI Designing . Currently pursuing Bachelor degree in
            Science and Technologie with a focus on Software Engineering. With a
            passion for creating visually appealing and user-friendly digital
            experiences, I strive to bring ideas to life through innovative
            designs. I’m dedicated to staying up-to-date with the latest
            industry trends and technologies to deliver exceptional results.
            Let’s work together to create impactful digital solutions.
          </p>
        </motion.div>
        <div className="max-w-xl text-center text-lg font-semibold">
          <motion.h3 variants={showComponentItem} className="text-primary">
            Techs and Tools I use:
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3 py-3">
            {techs.map((tech) => (
              <motion.span
                variants={showComponentTag}
                key={tech}
                className="cursor-pointer rounded-full bg-secondaryBg p-2 text-primary"
              >
                #{tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
      <LinkToBtn to="/about/contact" type="secondary">
        <span>Let's </span>
        <span className="flex items-center gap-0.5 text-highlight">
          Get In Touch <HiArrowSmallRight />
        </span>
      </LinkToBtn>
    </motion.div>
  );
}

export default Me;
