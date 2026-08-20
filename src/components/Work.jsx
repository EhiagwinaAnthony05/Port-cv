import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../content/siteContent';

export function Work() {
  return (
    <section id="work" className="work-section section-padding">
      <div className="work-header">
        <h2 className="section-title">Selected Work</h2>
        <span className="section-counter">
          ({String(projects.length).padStart(2, '0')})
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
                <div className="project-copy">
                  <div className="project-header-row">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-role">
                      {project.role}
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>
                  {project.impact ? (
                    <p className="project-impact">{project.impact}</p>
                  ) : null}
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
              </div>
            </motion.div>);

        })}
      </div>
    </section>);

}