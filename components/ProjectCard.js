import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <li className={styles.projectCard}>
      <Link href={`/project/${project.id}`}>
        <a>
          <div className={styles.projectInfo}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
          <div className={styles.projectLocation}>
            <p>Location: {project.location}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default ProjectCard;