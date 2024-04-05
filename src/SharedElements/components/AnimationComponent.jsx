import { motion } from "framer-motion";

export const SmoothComponent = ({ children }) => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8, "ease-in-out": "linear" }}
      >
        {children}
      </motion.div>
    </>
  );
};
