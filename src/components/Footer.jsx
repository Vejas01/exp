import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--tertiary)', marginTop: 'auto', background: 'transparent' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>

                    <div>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', margin: 0 }}>
                            LN<span style={{ color: 'var(--primary)' }}>.DEV</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                            Building the digital future.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>Home</a>
                        <a href="#projects" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>Work</a>
                        <a href="#contact" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>Contact</a>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
                            <a key={index} href="#" style={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid var(--tertiary)',
                                borderRadius: '50%',
                                color: 'var(--text-primary)',
                                transition: 'all 0.3s ease'
                            }}>
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>

                </div>

                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Lando Norris. All rights reserved. Tokyo Daylight Theme.
                </div>
            </div>
        </footer>
    );
}
