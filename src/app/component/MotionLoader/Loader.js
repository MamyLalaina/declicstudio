// components/Loader.js
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.div>
  );
}


