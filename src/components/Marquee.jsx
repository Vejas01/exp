import { motion } from "framer-motion";

export default function Marquee({ text, repeat = 4 }) {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            background: 'var(--primary)',
            color: '#fff',
            padding: '1rem 0',
            display: 'flex'
        }}>
            <motion.div
                animate={{ x: "-50%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ display: "flex", whiteSpace: "nowrap" }}
            >
                {Array.from({ length: repeat }).map((_, i) => (
                    <span key={i} style={{
                        fontSize: '3rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        marginRight: '4rem',
                        textTransform: 'uppercase'
                    }}>
                        {text}
                    </span>
                ))}
                {Array.from({ length: repeat }).map((_, i) => (
                    <span key={`dup-${i}`} style={{
                        fontSize: '3rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        marginRight: '4rem',
                        textTransform: 'uppercase'
                    }}>
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
