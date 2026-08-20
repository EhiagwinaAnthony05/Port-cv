import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { contactContent } from '../content/siteContent';
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
          {contactContent.titlePrefix} <br />
          <span className="hero-muted-italic">{contactContent.titleAccent}</span>{' '}
          {contactContent.titleSuffix}
        </h2>

        <a
          href={`mailto:${contactContent.email}`}
          className="contact-email group">
          {contactContent.email}
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
            {contactContent.socials.map((social) =>
            <a key={social.label} href={social.href} className="social-link">
                {social.label}
              </a>
            )}
          </div>
        </div>

        <div className="contact-credit">
          <p>© {new Date().getFullYear()} {contactContent.footerName}</p>
          <p>{contactContent.footerLocation}</p>
        </div>
      </div>
    </section>);

}