import { motion } from "framer-motion";

export default function ScrollReveal({ children, width = "fit-content", delay = 0 }) {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export function TextUnmask({ children, delay = 0 }) {
    return (
        <div style={{ overflow: 'hidden' }}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay, ease: [0.33, 1, 0.68, 1] }} // Cubic bezier for "snap" feel
            >
                {children}
            </motion.div>
        </div>
    )
}
