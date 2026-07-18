import { motion, useMotionValue, useSpring } from "framer-motion";
export default function MouseGlow() {
    const x = useMotionValue(-200);
    const y = useMotionValue(-200);
    const smoothX = useSpring(x, {
        stiffness: 120,
        damping: 20
    });
    const smoothY = useSpring(y, {
        stiffness: 120,
        damping: 20
    });
    return (
        <motion.div
            className="mouse-glow"
            style={{
                left: smoothX,
                top: smoothY
            }}
            onMouseMove={() => { }}
        />
    );
}