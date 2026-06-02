import { motion } from 'framer-motion';
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
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="hero-title">
          
          Designer & developer <br className="hero-break" />
          <span className="hero-muted-italic">crafting thoughtful</span>{' '}
          <br className="hero-break" />
          digital products.
        </motion.h1>

        <motion.p
          variants={item}
          className="hero-description">
          
          I specialize in bridging the gap between design and engineering,
          creating interfaces that are as beautiful as they are functional.
          Currently based in Lagos Nigeria.
        </motion.p>
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
          
          Scroll to explore
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