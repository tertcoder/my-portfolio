import { HiArrowSmallLeft } from "react-icons/hi2";
import LinkToBtn from "../../ui/LinkToBtn";
import LinkTo from "../../ui/LinkTo";
import { motion } from "framer-motion";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import XTwitterIcon from "../../assets/icons/XTwitterIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
const showComponent = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const showComponentLink = {
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

function Contact() {
  return (
    <div className="flex h-[calc(100vh-250px)] flex-col items-center justify-between py-10">
      <motion.div
        variants={showComponent}
        initial="initial"
        animate="animate"
        className="flex flex-1 -translate-y-16 flex-col justify-center text-center"
      >
        <h3 className="mb-4 text-4xl font-semibold text-primary">
          Let's get in touch!
        </h3>
        <div className="flex justify-center space-x-8">
          <motion.div variants={showComponentLink}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://linkedin.com/in/bon-tertius-tuyishimire-1a997321a"
            >
              <div className="group flex h-16 w-16 items-center justify-center rounded-[0.625rem] border-2 border-secondaryBg bg-secondaryBg hover:border-highlight">
                <LinkedinIcon className="duration-150 group-hover:fill-highlight" />
              </div>
            </a>
          </motion.div>
          <motion.div variants={showComponentLink}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://x.com/bon_tertius?s=09"
            >
              <div className="group flex h-16 w-16 items-center justify-center rounded-[0.625rem] border-2 border-secondaryBg bg-secondaryBg hover:border-highlight">
                <XTwitterIcon className="duration-150 group-hover:fill-highlight" />
              </div>
            </a>
          </motion.div>
          <motion.div variants={showComponentLink}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/tertcoder"
            >
              <div className="group flex h-16 w-16 items-center justify-center rounded-[0.625rem] border-2 border-secondaryBg bg-secondaryBg duration-150 hover:border-highlight">
                <GithubIcon className="duration-150 group-hover:stroke-highlight" />
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={showComponentLink}
          className="mt-10 text-base font-medium text-secondary"
        >
          Enjoy my blog post on{" "}
          <LinkTo
            to="https://medium.com/@tuyishimirebt12"
            className="no-underline"
          >
            Medium
          </LinkTo>{" "}
          and{" "}
          <LinkTo to="https://dev.to/tertcoder" className="no-underline">
            Dev.to
          </LinkTo>
          !
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
      >
        <LinkToBtn to="/about/me" type="secondary">
          <span className="flex items-center gap-0.5">
            <span className="text-highlight">
              <HiArrowSmallLeft />
            </span>{" "}
            Back to
          </span>
          <span className="text-highlight">AboutMe</span>
        </LinkToBtn>
      </motion.div>
    </div>
  );
}

export default Contact;
