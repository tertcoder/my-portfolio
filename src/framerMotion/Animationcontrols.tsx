import { motion, useAnimationControls } from "framer-motion";
function Animationcontrols() {
  const controls = useAnimationControls();
  function handleClick() {
    // Do something
    controls.start("flip");
  }
  return (
    <div className="grid h-screen place-content-center gap-3.5">
      <button
        onClick={handleClick}
        className="cursor-pointer rounded-lg bg-blue-600 p-2 text-3xl text-white"
      >
        Flip it
      </button>
      <motion.div
        className="h-40 w-40 bg-black"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
}

export default Animationcontrols;
