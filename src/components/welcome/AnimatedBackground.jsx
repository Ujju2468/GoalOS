import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="background-wrapper">

      <motion.div
        className="gradient gradient1"
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="gradient gradient2"
        animate={{
          x: [0, -150, 0],
          y: [0, 120, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="gradient gradient3"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />

    </div>
  );
}