import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagnetButton from './MagnetButton';
import { TextUnmask } from './ScrollReveal';
import SakuraRain from './SakuraRain';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

            {/* Background Image - Clear Day Fuji with Parallax */}
            <motion.div
                style={{
                    y: y1,
                    position: 'absolute',
                    inset: 0,
                    // New Image: Clean landscape, minimalist
                    backgroundImage: 'url(https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1920&auto=format&fit=crop)',
                    backgroundSize: 'cover',
                    /* 15% aligns the left-ish part of image with left of container, pushing the Center (Fuji) to the Right */
                    backgroundPosition: '15% 50%',
                    zIndex: 0,
                }}
            />

            {/* Color Grading Overlay - Tints the mountain Orange */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'var(--primary)',
                mixBlendMode: 'soft-light',
                opacity: 0.4,
                zIndex: 0
            }} />

            {/* Orange Particles */}
            <SakuraRain />

            {/* Light Gradient Mask - Fades from Warm Tint (Text side) to Transparent (Image side) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, #fffaf4 10%, rgba(255,250,244,0.95) 40%, rgba(255,250,244,0.0) 80%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'center' }}>

                    <div style={{ gridColumn: 'span 7' }}>

                        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 0.85, fontWeight: 700, marginBottom: '2rem', color: 'var(--secondary)' }}>
                            <TextUnmask delay={0.2}>CREATIVE</TextUnmask>
                            <TextUnmask delay={0.3}><span style={{ color: 'var(--primary)' }}>DEVELOPER</span></TextUnmask>
                        </h1>

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

                </div>
            </div>

        </section>
    );
}
