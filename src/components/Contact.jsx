import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import MagnetButton from './MagnetButton';

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            {/* Glow behind */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: 'var(--tertiary)',
                opacity: 0.2,
                filter: 'blur(100px)',
                pointerEvents: 'none'
            }} />

            <div className="container">
                <ScrollReveal>
                    <div className="section-header">
                        <h2>Get in <span style={{ color: 'var(--secondary)' }}>Touch</span></h2>
                        <p>Let's build something amazing together.</p>
                    </div>
                </ScrollReveal>

                <div className="contact-grid">
                    <div className="contact-info">
                        <ScrollReveal delay={0.2}>
                            <div className="contact-info-card">
                                <div className="contact-icon-box">
                                    <Mail size={24} color="white" />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: 0 }}>Email</h4>
                                    <p style={{ margin: 0 }}>hello@devfolio.com</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="contact-info-card">
                                <div className="contact-icon-box">
                                    <Phone size={24} color="white" />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: 0 }}>Phone</h4>
                                    <p style={{ margin: 0 }}>+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="contact-info-card">
                                <div className="contact-icon-box">
                                    <MapPin size={24} color="white" />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: 0 }}>Location</h4>
                                    <p style={{ margin: 0 }}>San Francisco, CA</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.5}>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group-row">
                                <input type="text" placeholder="Name" className="form-input" />
                                <input type="email" placeholder="Email" className="form-input" />
                            </div>
                            <input type="text" placeholder="Subject" className="form-input" />
                            <textarea placeholder="Message" rows="5" className="form-input"></textarea>

                            <MagnetButton className="form-btn">
                                Send Message
                            </MagnetButton>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
