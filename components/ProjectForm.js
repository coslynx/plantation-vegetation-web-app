import React, { useState } from 'react';
import styles from '../styles/ProjectForm.module.css';
import { usePlantContext } from '../contexts/PlantContext';
import { useUserContext } from '../contexts/UserContext';

const ProjectForm = ({ onSubmit, formData, setFormData, plants, users }) => {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);

  const handlePlantChange = (event) => {
    setSelectedPlant(event.target.value);
    setFormData({
      ...formData,
      plantSpecies: event.target.value,
    });
  };

  const handleTeamMemberChange = (event) => {
    const isChecked = event.target.checked;
    const userId = event.target.value;

    if (isChecked) {
      setSelectedTeamMembers([...selectedTeamMembers, userId]);
      setFormData({
        ...formData,
        teamMembers: [...formData.teamMembers, userId],
      });
    } else {
      setSelectedTeamMembers(selectedTeamMembers.filter((id) => id !== userId));
      setFormData({
        ...formData,
        teamMembers: formData.teamMembers.filter((id) => id !== userId),
      });
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.projectForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Project Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="plantSpecies">Plant Species:</label>
        <select
          id="plantSpecies"
          name="plantSpecies"
          value={selectedPlant || formData.plantSpecies}
          onChange={handlePlantChange}
          required
        >
          <option value="">Select a Plant Species</option>
          {plants.map((plant) => (
            <option key={plant.id} value={plant.name}>
              {plant.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="teamMembers">Team Members:</label>
        {users.map((user) => (
          <div key={user.id}>
            <input
              type="checkbox"
              id={`teamMember-${user.id}`}
              name="teamMembers"
              value={user.id}
              checked={selectedTeamMembers.includes(user.id)}
              onChange={handleTeamMemberChange}
            />
            <label htmlFor={`teamMember-${user.id}`}>
              {user.username}
            </label>
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Save Project</button>
    </form>
  );
};

export default ProjectForm;