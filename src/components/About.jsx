import { motion } from 'framer-motion';
import { aboutContent } from '../content/siteContent';
export function About() {
  return (
    <section
      id="about"
      className="about-section section-padding">
      
      <div className="about-grid">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
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
          className="about-main">
          <h2 className="section-title about-title">{aboutContent.title}</h2>
          <div className="about-copy">
            {aboutContent.paragraphs.map((paragraph) =>
            <p key={paragraph}>{paragraph}</p>
            )}
          </div>

          <div className="skill-cluster">
            {aboutContent.capabilities.map((item) => (
              <span key={item} className="skill-pill">{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="about-side">

          <div className="about-portrait-wrap">
            <img
              src={aboutContent.portrait.src}
              alt={aboutContent.portrait.alt}
              className="about-portrait" />

          </div>

          <div className="about-meta-stack">
            <div className="meta-card">
              <h4 className="meta-heading">
                Location
              </h4>
              <p className="meta-text">{aboutContent.location}</p>
            </div>

            <div className="meta-card">
              <h4 className="meta-heading">
                Experience
              </h4>
              <ul className="experience-list">
                {aboutContent.experience.map((item) =>
                <li key={item} className="experience-row">
                    <span>{item}</span>{' '}
                    <span className="meta-muted"></span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}