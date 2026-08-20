import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import PropTypes from 'prop-types';
import { brandContent, navigationLinks } from '../content/siteContent';

export function Header({ theme, onToggleTheme }) {
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
        {brandContent.displayName}
      </a>

      <nav className="main-nav">
        {navigationLinks.map((link) =>
        <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        )}
      </nav>

      <div className="header-controls">
        <button
          type="button"
          className="theme-button"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={onToggleTheme}>
          {theme === 'dark' ?
          <>
              <Sun size={15} aria-hidden="true" />
              Light
            </> :
          <>
              <Moon size={15} aria-hidden="true" />
              Dark
            </>}
        </button>

        <button
          type="button"
          className="menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

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
        {navigationLinks.map((link) =>
        <a key={link.href} href={link.href} className="mobile-nav-link" onClick={closeMenu}>
            {link.label}
          </a>
        )}
        <button
          type="button"
          className="mobile-nav-link mobile-theme-button"
          onClick={onToggleTheme}>
          {theme === 'dark' ? 'Use Light Mode' : 'Use Dark Mode'}
        </button>
      </motion.nav>
    </motion.header>);

}

Header.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired
};