import { motion, useReducedMotion } from 'framer-motion';
import { clients } from '../content/siteContent';
export function Clients() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="clients-section section-padding">
      <div className="clients-heading-wrap">
        <h4 className="meta-heading">
          Selected Clients & Collaborators
        </h4>
      </div>

      <div className="clients-marquee-wrap">
        <motion.div
          className="clients-marquee"
          animate={prefersReducedMotion ? undefined : {
            x: ['0%', '-50%']
          }}
          transition={prefersReducedMotion ? undefined : {
            repeat: Infinity,
            ease: 'linear',
            duration: 20
          }}>
          
          {[...clients, ...clients, ...clients, ...clients].map(
            (client, index) =>
            <span
              key={index}
              className="client-item">
              
                {client}
              </span>

          )}
        </motion.div>
      </div>
    </section>);

}