import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagnetButton from './MagnetButton';
import ScrollReveal, { TextUnmask } from './ScrollReveal';
import SakuraRain from './SakuraRain';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section id="home" style={{ position: 'relative', height: '110vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

            {/* Background Image - Clear Day Fuji with Parallax */}
            <motion.div
                style={{
                    y: y1,
                    position: 'absolute',
                    inset: 0,
                    // User provided Fuji image
                    backgroundImage: 'url(/hero-fuji.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    // Golden Hour Filter: Sepia adds warmth, Hue-rotate shifts blue -> teal/gold
                    filter: 'sepia(0.5) saturate(1.4) hue-rotate(-15deg) contrast(1.1)'
                }}
            />

            {/* Color Grading Overlay - Golden Sunlight Wash */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(255, 94, 0, 0.3), rgba(255, 160, 0, 0.1))',
                mixBlendMode: 'overlay',
                pointerEvents: 'none',
                zIndex: 1
            }} />

            {/* Orange Particles */}
            <SakuraRain />

            {/* Gradient Mask - Reverted to Original (Left Fade Only) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, #fffaf4 10%, rgba(255,250,244,0.95) 40%, rgba(255,250,244,0.0) 80%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'center' }}>

                    <div style={{ gridColumn: 'span 8', position: 'relative', zIndex: 10 }}>

                        <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', lineHeight: 1, fontWeight: 700, marginBottom: '0.5rem', color: 'var(--secondary)' }}>
                            <TextUnmask delay={0.2}>Vejas Sai</TextUnmask>
                        </h1>

                        <div style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 600, marginBottom: '2.5rem', color: 'var(--primary)', lineHeight: 1.1 }}>
                            <TextUnmask delay={0.3}>Full Stack Developer</TextUnmask>
                        </div>

                        <TextUnmask delay={0.5}>
                            <p style={{ fontSize: '1.5rem', maxWidth: '600px', marginBottom: '3rem', color: 'var(--text-secondary)', borderLeft: '3px solid var(--primary)', paddingLeft: '1.5rem', fontWeight: 500 }}>
                                Building brands and digital experiences with clear intent and focus.
                            </p>
                        </TextUnmask>

                        <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem' }}>
                            <MagnetButton href="#projects" className="btn-primary">
                                Explore Work <ArrowRight size={24} />
                            </MagnetButton>
                        </div>
                    </div>

                    {/* Portrait Column - Smaller & Refined */}
                    <div style={{ gridColumn: 'span 4', position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}>
                        {/* Entrance Wrapper (No Overflow Hidden) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0], rotate: [3, 0, 3] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '280px',
                                    aspectRatio: '3/4',
                                    borderRadius: '32px',
                                    overflow: 'hidden',
                                    /* Removed border and white bg for seamless blend */
                                    boxShadow: '0 25px 50px -12px rgba(255, 94, 0, 0.15)', /* Warm Orange Shadow for blending */
                                    cursor: 'pointer'
                                }}
                                whileHover={{ scale: 1.05, rotate: 0 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.2), transparent)', zIndex: 1 }} />
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                    alt="Profile"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
}
