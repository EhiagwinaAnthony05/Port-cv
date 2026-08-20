import { motion } from 'framer-motion';
import { heroContent } from '../content/siteContent';
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
export function Hero() {
  return (
    <section className="hero-section">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="hero-content">

        <motion.div variants={item} className="hero-status">
          <div className="status-dot-wrap">
            <span className="status-dot-ping"></span>
            <span className="status-dot-core"></span>
          </div>
          <span className="hero-status-text">
            {heroContent.status}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="hero-title">
          {heroContent.titlePrefix} <br className="hero-break" />
          <span className="hero-muted-italic">{heroContent.titleAccent}</span>{' '}
          <br className="hero-break" />
          {heroContent.titleSuffix}
        </motion.h1>

        <motion.p
          variants={item}
          className="hero-description">
          {heroContent.description}
        </motion.p>

        <motion.div variants={item} className="hero-actions">
          <a href="#work" className="primary-cta">View work</a>
          <a href="#contact" className="secondary-cta">Let&apos;s talk</a>
        </motion.div>

        <motion.div variants={item} className="hero-stack" aria-label="Core technologies">
          {['React', 'JavaScript', 'UI Systems', 'Product Thinking', 'Frontend'].map((tech) => (
            <span key={tech} className="stack-pill">{tech}</span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="hero-scroll-wrap">

        <a
          href="#work"
          className="hero-scroll-link">
          {heroContent.scrollLabel}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero-scroll-icon">

            <path
              d="M6 1V11M6 11L1 6M6 11L11 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round" />

          </svg>
        </a>
      </motion.div>
    </section>);

}