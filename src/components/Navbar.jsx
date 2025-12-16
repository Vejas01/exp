import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          LN<span style={{ color: 'var(--primary)' }}>.DEV</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links mobile-hide" style={{ display: 'flex' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>
            HIRE ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle" style={{ display: 'none' }}>
          {/* Note: In CSS we hide this on desktop. Inline style here just as fallback or valid jsx for now, strictly governed by CSS media queries usually */}
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        {/* Force mobile toggle visible on small screens via style prop override if CSS fails (safeguard) */}
        <div className="mobile-toggle-wrapper md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: 'var(--text-primary)' }}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{ position: 'fixed', top: 0, left: 0, background: 'var(--bg-dark)', width: '100%', zIndex: 999, paddingTop: '100px' }}
          >
            <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', color: 'var(--text-primary)' }}>
              <X size={40} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="nav-link"
                style={{ fontSize: '3rem' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
