import React, { useState, useEffect } from 'react';
import styles from '../styles/ProjectManagement.module.css';
import { useQuery, useMutation } from 'react-query';
import { fetchProjects, createProject, updateProject, deleteProject } from '../services/projectService';
import { useAuth } from '../contexts/AuthContext';
import { usePlantContext } from '../contexts/PlantContext';
import { useUserContext } from '../contexts/UserContext';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import Map from './Map';

const ProjectManagement = () => {
  const { isAuthenticated } = useAuth();
  const { plants } = usePlantContext();
  const { users } = useUserContext();

  const [selectedProject, setSelectedProject] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    plantSpecies: '',
    teamMembers: [],
    startDate: '',
    endDate: '',
  });

  const { data: projects, isLoading, error } = useQuery('projects', fetchProjects);

  const createProjectMutation = useMutation(createProject, {
    onSuccess: () => {
      setShowForm(false);
      setFormData({
        name: '',
        description: '',
        location: '',
        plantSpecies: '',
        teamMembers: [],
        startDate: '',
        endDate: '',
      });
    },
    onError: (error) => {
      console.error('Error creating project:', error);
    },
  });

  const updateProjectMutation = useMutation(updateProject, {
    onSuccess: () => {
      setSelectedProject(null);
      setShowForm(false);
    },
    onError: (error) => {
      console.error('Error updating project:', error);
    },
  });

  const deleteProjectMutation = useMutation(deleteProject, {
    onSuccess: () => {
      setSelectedProject(null);
    },
    onError: (error) => {
      console.error('Error deleting project:', error);
    },
  });

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setFormData({
      name: project.name,
      description: project.description,
      location: project.location,
      plantSpecies: project.plantSpecies,
      teamMembers: project.teamMembers,
      startDate: project.startDate,
      endDate: project.endDate,
    });
  };

  const handleFormSubmit = async (data) => {
    if (selectedProject) {
      updateProjectMutation.mutate({
        id: selectedProject.id,
        ...data,
      });
    } else {
      createProjectMutation.mutate(data);
    }
  };

  const handleDeleteProject = (id) => {
    deleteProjectMutation.mutate(id);
  };

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching projects.</p>;
  }

  return (
    <div className={styles.projectManagement}>
      <h1>Project Management</h1>
      {isAuthenticated && (
        <>
          <button onClick={() => setShowForm(true)}>Create Project</button>
          {showForm && (
            <ProjectForm
              onSubmit={handleFormSubmit}
              formData={formData}
              setFormData={setFormData}
              plants={plants}
              users={users}
            />
          )}
        </>
      )}
      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={handleProjectSelect}
            onDelete={handleDeleteProject}
          />
        ))}
      </div>
      {selectedProject && (
        <div className={styles.projectDetails}>
          <h2>{selectedProject.name}</h2>
          <p>{selectedProject.description}</p>
          <p>Location: {selectedProject.location}</p>
          <p>Plant Species: {selectedProject.plantSpecies}</p>
          <p>Team Members: {selectedProject.teamMembers.join(', ')}</p>
          <p>Start Date: {selectedProject.startDate}</p>
          <p>End Date: {selectedProject.endDate}</p>
          <Map location={selectedProject.location} />
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;