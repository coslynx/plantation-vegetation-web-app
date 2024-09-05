import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchProject } from '../services/projectService';
import { usePlantContext } from '../contexts/PlantContext';
import { useUserContext } from '../contexts/UserContext';
import Map from './Map';
import styles from '../styles/ProjectDetails.module.css';

const ProjectDetails = () => {
  const { plants } = usePlantContext();
  const { users } = useUserContext();
  const { query } = useQuery('project', fetchProject);

  const [project, setProject] = useState(null);

  useEffect(() => {
    if (query.data) {
      setProject(query.data);
    }
  }, [query.data]);

  if (query.isLoading) {
    return <p>Loading project details...</p>;
  }

  if (query.isError) {
    return <p>An error occurred while fetching project details.</p>;
  }

  if (!project) {
    return null;
  }

  const plant = plants.find((p) => p.name === project.plantSpecies);
  const teamMembers = project.teamMembers.map((memberId) => users.find((u) => u.id === memberId));

  return (
    <div className={styles.projectDetails}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Location: {project.location}</p>
      {plant && (
        <>
          <p>Plant Species: {plant.name}</p>
          <img src={plant.image} alt={plant.name} className={styles.plantImage} />
        </>
      )}
      <p>Team Members:</p>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>{member.username}</li>
        ))}
      </ul>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
      <Map location={project.location} />
      {/ Add more sections for progress tracking, updates, milestones, etc. /}
    </div>
  );
};

export default ProjectDetails;