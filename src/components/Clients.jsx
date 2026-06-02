import { motion } from 'framer-motion';
const clients = [
'MOVE X XPRESS',
'COMING SOON',
'COMING SOON',
'COMING SOON',
'COMING SOON',
'COMING SOON'];
export function Clients() {
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
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
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