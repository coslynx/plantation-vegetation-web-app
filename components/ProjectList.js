import React from 'react';
import { useQuery } from 'react-query';
import { fetchProjects } from '../services/projectService';
import ProjectCard from './ProjectCard';
import styles from '../styles/ProjectList.module.css';

const ProjectList = () => {
  const { data: projects, isLoading, error } = useQuery('projects', fetchProjects);

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching projects.</p>;
  }

  return (
    <div className={styles.projectList}>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;