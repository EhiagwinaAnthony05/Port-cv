import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
      if (window.scrollY > 12) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{
        y: -20,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      
      <a
        href="#"
        className="brand-link">
        
        EHIAGWINA ANTHONY 
      </a>

      <nav className="main-nav">
        <a href="#work" className="nav-link">
          Work
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>

      <button
        type="button"
        className="menu-button"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      <motion.nav
        id="mobile-navigation"
        className={`mobile-nav-panel ${isMenuOpen ? 'is-open' : ''}`}
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: {
            opacity: 1,
            y: 0,
            pointerEvents: 'auto'
          },
          closed: {
            opacity: 0,
            y: -8,
            pointerEvents: 'none'
          }
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut'
        }}>
        <a href="#work" className="mobile-nav-link" onClick={closeMenu}>
          Work
        </a>
        <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
          About
        </a>
        <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
          Contact
        </a>
      </motion.nav>
    </motion.header>);

}