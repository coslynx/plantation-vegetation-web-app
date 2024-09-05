import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { fetchPlant } from '../services/plantService';
import styles from '../styles/PlantInfo.module.css';

const PlantInfo = () => {
  const { plantId } = useParams();
  const { data: plant, isLoading, error } = useQuery(['plant', plantId], () => fetchPlant(plantId));

  if (isLoading) {
    return <p>Loading plant information...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching plant information.</p>;
  }

  return (
    <div className={styles.plantInfo}>
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} className={styles.plantImage} />
      <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
      <p><strong>Family:</strong> {plant.family}</p>
      <p><strong>Native Region:</strong> {plant.nativeRegion}</p>
      <h3>Planting Techniques</h3>
      <p>{plant.plantingTechniques}</p>
      <h3>Care Requirements</h3>
      <p>{plant.careRequirements}</p>
      <h3>Environmental Benefits</h3>
      <p>{plant.environmentalBenefits}</p>
      <h3>Regional Suitability</h3>
      {/ Add interactive map here using Leaflet.js /}
    </div>
  );
};

export default PlantInfo;