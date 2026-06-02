import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section section-padding">
      
      <motion.div
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.8
        }}
        className="contact-main">
        
        <h2 className="contact-title">
          Let&apos;s build <br />
          <span className="hero-muted-italic">something</span> together.
        </h2>

        <a
          href="mailto:ehis.pele10@gmail.com"
          className="contact-email group">
          
          ehis.pele10@gmail.com
          <ArrowUpRight
            className="contact-email-icon"
            size={32} />
          
        </a>
      </motion.div>

      <div className="contact-footer">
        <div className="contact-socials-wrap">
          <h4 className="meta-heading">
            Socials
          </h4>
          <div className="contact-socials">
            <a href="https://wa.me/2348115809354" className="social-link">
              WhatsApp
            </a>
            <a href="https://instagram.com/heistony0510" className="social-link">
              Instagram
            </a>
            <a href="https://facebook.com/" className="social-link">
              Facebook
            </a>
            <a href="https://x.com/heistony0510?s=21" className="social-link">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/ehis-pele-10" className="social-link">
              LinkedIn
            </a>
            <a href="https://github.com/EhiagwinaAnthony05" className="social-link">
              GitHub
            </a>
    
          </div>
        </div>

        <div className="contact-credit">
          <p>© {new Date().getFullYear()} EHIAGWINA ANTHONYY </p>
          <p>Designed in Lagos, Nigeria</p>
        </div>
      </div>
    </section>);

}