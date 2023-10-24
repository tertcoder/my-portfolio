import { motion, MotionConfig } from "framer-motion";
function Gestures() {
  return (
    <div className="grid h-screen place-content-center gap-3.5">
      <MotionConfig transition={{ duration: 0.125, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="cursor-pointer rounded-lg bg-blue-600 p-2 text-3xl text-white"
        >
          Click Me!
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85, rotate: "2.5deg" }}
          className="cursor-pointer rounded-lg bg-red-600 p-2 text-3xl text-white"
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}

export default Gestures;
