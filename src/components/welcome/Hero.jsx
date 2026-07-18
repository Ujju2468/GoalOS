import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import StartButton from "./StartButton";

export default function Hero() {
    return (
        <motion.section

            whileHover={{
                rotateX: 2,
                rotateY: -2,
                scale: 1.01
            }}
            style={{
                transformStyle: "preserve-3d"
            }}

            className="hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >

            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .2 }}
                className="hero-tag"
            >
                DEVELOPER OPERATING SYSTEM
            </motion.span>

            <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .8 }}
            >
                <motion.span
                    animate={{
                        textShadow: [
                            "0 0 10px #c7e930",
                            "0 0 40px #15a968",
                            "0 0 10px #1dab0b"
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity
                    }}
                >
                    GoalOS
                </motion.span>
            </motion.h1>

            <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .6 }}
            >
                Welcome to GoalOS.
                The operating system that helps you track,
                execute and achieve every goal.
            </motion.p>

            <TypeAnimation
                sequence={[
                    "Track Goals.",
                    1800,
                    "Build Discipline.",
                    1800,
                    "Stay Consistent.",
                    1800,
                    "Become Unstoppable.",
                    1800
                ]}
                repeat={Infinity}
                speed={45}
                className="hero-typing"
            />

            <StartButton />

        </motion.section>
    );
}