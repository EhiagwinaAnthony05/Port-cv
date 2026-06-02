import { motion } from 'framer-motion';
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
          
          <h2 className="section-title about-title">About</h2>
          <div className="about-copy">
            <p>
              I&apos;m a multidisciplinary designer and developer with over 1 year plus
              of experience creating digital products that are both visually
              compelling and highly functional.
            </p>
            <p>
              My approach is rooted in editorial design principles focusing on
              typography, grid systems, and intentional whitespace combined with
              modern engineering practices to build fast, accessible, and
              scalable interfaces.
            </p>
            <p>
              When I&apos;m not pushing pixels or writing code, you can find me
              exploring film photography, reading about architecture, or trying
              to perfect my pourover coffee recipe.
            </p>
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
              src='/assets/contact-img/tony-pic.png'
              alt="Portrait"
              className="about-portrait" />
            
          </div>

          <div className="about-meta-stack">
            <div>
              <h4 className="meta-heading">
                Location
              </h4>
              <p className="meta-text">Lagos, Nigeria</p>
            </div>

            <div>
              <h4 className="meta-heading">
                Experience
              </h4>
              <ul className="experience-list">
                <li className="experience-row">
                  <span>Designer & Developer</span>{' '}
                  <span className="meta-muted"></span>
                </li>
                <li className="experience-row">
                  <span>Full-Stack Dev</span>{' '}
                  <span className="meta-muted"></span>
                </li>
                <li className="experience-row">
                  <span>Freelance</span>{' '}
                  <span className="meta-muted"></span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="meta-heading">
                Core Capabilities
              </h4>
              <p className="meta-capabilities">
                Art Direction, UI/UX Design, Prototyping, React, JavaScript,
                CSS, Framer Motion, Creative Coding.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}