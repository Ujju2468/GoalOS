import { motion } from "framer-motion";

const cards = [

    {
        title: "🔥 Stay Consistent",
        value: "07 Days",
        top: "14%",
        left: "8%"
    },
    {
        title: "📈 Growth",
        value: "60%",
        top: "24%",
        right: "8%"
    },
    {
        title: "💻 Work Hard",
        value: "9Hr",
        bottom: "18%",
        left: "10%"
    },
    {
        title: "✅ Today's Goal",
        value: "Achieved",
        bottom: "14%",
        right: "10%"
    }
];
export default function FloatingCards() {
    return (
        <>
            {
                cards.map((card, index) => (
                    <motion.div
                        whileHover={{
                            scale: 1.08,
                            y: -8
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 250
                        }}
                        key={index}
                        className="floating-card"
                        style={{
                            top: card.top,
                            bottom: card.bottom,
                            left: card.left,
                            right: card.right
                        }}
                        animate={{
                            y: [0, -12, 0]
                        }}
                        transition={{
                            duration: 4 + index,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <small>{card.title}</small>
                        <h4>{card.value}</h4>
                    </motion.div>
                ))
            }
        </>
    );
}