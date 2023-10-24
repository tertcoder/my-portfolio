import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="grid h-screen place-content-center gap-3.5">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="cursor-pointer rounded-lg bg-blue-700 p-2 text-3xl text-white"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 150, -150, -150, 0] }}
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="h-36 w-36 bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BasicsOfMotion;
