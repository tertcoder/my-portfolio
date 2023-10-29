import { HiArrowRight } from "react-icons/hi2";
import { showComponentItem } from "./Experiences";
import { motion } from "framer-motion";

type PropType = {
  title: string;
  description: string;
  variants: typeof showComponentItem;
};
function Experience({ title, description, variants }: PropType) {
  return (
    <motion.div variants={variants} className="grid grid-cols-[32px_1fr]">
      <div className="text-highlight">
        <HiArrowRight />
      </div>
      <div className="text-primary">
        <h2 className="mb-2 font-bold leading-none">{title}</h2>
        <p className="max-w-4xl font-medium text-secondary">{description}</p>
      </div>
    </motion.div>
  );
}

export default Experience;
