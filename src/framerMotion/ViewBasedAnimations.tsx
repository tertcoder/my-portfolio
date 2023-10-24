import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view --> ", isInView);
  }, [isInView]);

  return (
    <>
      <div className="h-[150vh]"></div>
      <motion.div
        className="h-screen bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        className={twMerge(
          `h-screen transition-[1s_background]`,
          ` bg-${isInView ? "blue" : "red"}-600`,
        )}
      ></div>
    </>
  );
}

export default ViewBasedAnimations;
