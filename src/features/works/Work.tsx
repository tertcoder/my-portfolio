import { HiMiniPencil } from "react-icons/hi2";
import Github from "../../assets/Github";
import GoLive from "../../assets/GoLive";
import { WorkType } from "./Projects";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type PropsType = WorkType;
function Work({ title, techs, code, live, design, image }: PropsType) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="grid w-80 grid-rows-[256px_1fr] rounded-2xl bg-secondaryBg p-3 shadow-lg">
      <div className="overflow-hidden rounded-xl">
        <img src={`${image}`} alt={title} className="h-64 object-cover" />
      </div>
      <div className="relative flex flex-col justify-center gap-2 pt-3">
        {design && (
          <motion.a
            href={design}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="absolute right-1 top-3 flex items-center gap-2 overflow-hidden rounded-full bg-primaryBg p-1.5 text-primary duration-300 hover:text-highlight"
            layout
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <HiMiniPencil />
            <AnimatePresence mode="popLayout">
              {isVisible && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: "backInOut" }}
                  className="text-sm font-semibold text-highlight"
                >
                  design
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        )}
        <h2 className="text-base font-semibold text-primary">{title}</h2>
        <div className="flex flex-wrap gap-1">
          {techs.map((tech) => (
            <span key={tech} className="text-sm font-medium text-secondary">
              #{tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          {code && (
            <>
              <a
                href={code}
                target="_blank"
                className="flex items-center gap-2 rounded-xl  border-2 border-primaryBg px-3 py-2  text-base font-semibold text-primary"
              >
                <Github />
                <span> GitHub</span>
              </a>
              <a
                href={live}
                target="_blank"
                className="flex items-center  gap-2 rounded-xl  border-2 border-primaryBg px-3 py-2  text-base font-semibold text-primary"
              >
                <GoLive />
                <span> Live</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
