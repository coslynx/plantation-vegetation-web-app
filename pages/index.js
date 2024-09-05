"use client";

import React from "react";
import { useQuery } from "react-query";
import { fetchPlants } from "../services/plantService";
import PlantCard from "./PlantCard";
import styles from "../styles/PlantDatabase.module.css";

const PlantDatabase = () => {
  const { data: plants, isLoading, error } = useQuery("plants", fetchPlants);

  if (isLoading) {
    return <p>Loading plant database...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching plants.</p>;
  }

  return (
    <div className={styles.plantDatabase}>
      <h1>Plant Database</h1>
      <ul className={styles.plantList}>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ul>
    </div>
  );
};

export default PlantDatabase;