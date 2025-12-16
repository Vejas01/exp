import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const SPRING_CONFIG = { damping: 15, stiffness: 150, mass: 0.1 };

export default function MagnetButton({ children, className = "", onClick, href }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, SPRING_CONFIG);
    const ySpring = useSpring(y, SPRING_CONFIG);

    const transform = useMotionTemplate`translate(${xSpring}px, ${ySpring}px)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const midX = width / 2;
        const midY = height / 2;

        const clientX = e.clientX - left;
        const clientY = e.clientY - top;

        const offsetX = (clientX - midX) * 0.35; // Strength of pull
        const offsetY = (clientY - midY) * 0.35;

        x.set(offsetX);
        y.set(offsetY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform }}
            className={`btn ${className}`}
        >
            {children}
        </Component>
    );
}
