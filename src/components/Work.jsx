import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const projects = [
{
  id: 1,
  title: 'MoveX Xpress Logistics Platform',
  role: 'Product Strategy • UX/UI • Frontend • 2026',
  description:
  'A unified logistics platform for booking, shipment tracking, route intelligence, and dispatch visibility across web and mobile devices. Built to reduce delivery friction, improve live operational control, and give both customers and internal teams a faster decision loop.',
  image: '/assets/work/move-x mockup.png',
  size: 'large',
  comingSoon: false,
  url: 'https://move-x-xpress-2e2r.vercel.app/'
},
{
  id: 2,
  title: 'Confidential Project Slot',
  role: 'Coming Soon',
  description: 'A new case study will be published here shortly.',
  image:
  'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop',
  size: 'small',
  comingSoon: true
},
{
  id: 3,
  title: 'Confidential Project Slot',
  role: 'Coming Soon',
  description: 'A new case study will be published here shortly.',
  image:
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop',
  size: 'small',
  comingSoon: true
},
{
  id: 4,
  title: 'Confidential Project Slot',
  role: 'Coming Soon',
  description: 'A new case study will be published here shortly.',
  image:
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
  size: 'large',
  comingSoon: true
}];

export function Work() {
  return (
    <section id="work" className="work-section section-padding">
      <div className="work-header">
        <h2 className="section-title">Selected Work</h2>
        <span className="section-counter">
          (04)
        </span>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => {
          // Asymmetric layout logic
          const cardSizeClass = project.size === 'large' ? 'project-card-large' : 'project-card-small';
          const cardOffsetClass = index % 2 !== 0 && project.size === 'small' ? 'project-card-offset' : '';
          return (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-100px'
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`project-card ${cardSizeClass} ${cardOffsetClass} ${project.comingSoon ? 'project-card-soon' : ''}`}>
              
              <div className="project-media-wrap">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-image" />

                {project.comingSoon ?
                <div className="project-coming-soon-badge">Coming Soon</div> :
                null}
                
                <div className="project-overlay" />

                {!project.comingSoon && project.url ?
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                  className="project-icon-wrap">
                    <ArrowUpRight size={20} />
                  </a> :
                null}
              </div>

              <div className="project-content-row">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  {project.url ?
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-live-link">
                      View Live Project
                      <ArrowUpRight size={16} />
                    </a> :
                  null}
                </div>
                <span className="project-role">
                  {project.role}
                </span>
              </div>
            </motion.div>);

        })}
      </div>
    </section>);

}