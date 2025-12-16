import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const projects = [
    {
        title: 'NEON COMMERCE',
        category: 'E-COMMERCE',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
        link: '#'
    },
    {
        title: 'AI ANALYTICS',
        category: 'DASHBOARD',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        link: '#'
    },
    {
        title: 'CRYPTO VAULT',
        category: 'WEB3',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
        link: '#'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="projects-section" style={{ minHeight: '100vh', padding: '8rem 0' }}>
            <div className="container">
                <ScrollReveal>
                    <div className="section-header"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '2rem' }}
                    >
                        <div>
                            <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '2px' }}>PORTFOLIO</span>
                            <h2 style={{ fontSize: '4rem', margin: 0, lineHeight: 1 }}>FEATURED <br /> WORK</h2>
                        </div>
                        <div className="mobile-hide">
                            <a href="#" className="btn btn-glass">VIEW ALL WORK</a>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 0.2}>
                            <div
                                className="project-card-industrial"
                                style={{ position: 'relative', group: 'group' }}
                            >
                                <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--glass-border)', aspectRatio: '4/3' }}>
                                    <div style={{ position: 'absolute', inset: 0, background: 'var(--primary)', mixBlendMode: 'overlay', opacity: 0, transition: 'opacity 0.3s', zIndex: 1 }} className="hover-overlay" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)', transition: 'transform 0.5s, filter 0.3s' }}
                                        className="project-img"
                                    />

                                    {/* Hover reveal */}
                                    <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s' }} className="project-hover-content">
                                        <div style={{ width: '80px', height: '80px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <ArrowUpRight size={40} color="white" />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--tertiary)', paddingBottom: '1rem' }}>
                                    <div>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>{project.category}</span>
                                        <h3 style={{ fontSize: '2rem', margin: 0 }}>{project.title}</h3>
                                    </div>
                                    <span style={{ color: 'var(--primary)', fontSize: '1.5rem', fontFamily: 'var(--font-mono)' }}>0{index + 1}</span>
                                </div>

                                {/* CSS Injection for hover effects */}
                                <style>{`
                                  .project-card-industrial:hover .project-img {
                                      transform: scale(1.1);
                                      filter: grayscale(0%);
                                  }
                                  .project-card-industrial:hover .project-hover-content {
                                      opacity: 1;
                                  }
                                  .project-card-industrial:hover .hover-overlay {
                                      opacity: 0.2;
                                  }
                              `}</style>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
