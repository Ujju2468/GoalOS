import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StartButton() {
    const navigate = useNavigate();
    return (
        <motion.button
            className="start-btn"
            whileHover={{
                scale: 1.05,
                y: -3
            }}
            whileTap={{
                scale: .95
            }}
            transition={{
                type: "spring",
                stiffness: 250
            }}
            onClick={() => navigate("/dashboard")}
        >
            <span>Begin Journey</span>
            <motion.div
                animate={{
                    x: [0, 8, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.4
                }}
            >
                <ArrowRight size={22} />
            </motion.div>
        </motion.button>
    );
}