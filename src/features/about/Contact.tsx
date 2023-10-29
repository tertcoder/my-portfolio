import { HiArrowSmallLeft } from "react-icons/hi2";
import LinkToBtn from "../../ui/LinkToBtn";
import LinkTo from "../../ui/LinkTo";
import { motion } from "framer-motion";
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
            <LinkTo to="http://linkedin.com/in/bon-tertius-tuyishimire-1a997321a">
              LinkedIn
            </LinkTo>
          </motion.div>
          <motion.div variants={showComponentLink}>
            <LinkTo to="http://x.com/bon_tertius?s=09" alt="twitter">
              X
            </LinkTo>
          </motion.div>
          <motion.div variants={showComponentLink}>
            <LinkTo to="https://github.com/tertcoder">GitHub</LinkTo>
          </motion.div>
        </div>
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
