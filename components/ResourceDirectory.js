import React from 'react';
import styles from '../styles/ResourceDirectory.module.css';
import { useQuery } from 'react-query';
import { fetchResources } from '../services/resourceService';
import { useAuthContext } from '../contexts/AuthContext';

const ResourceDirectory = () => {
  const { isAuthenticated } = useAuthContext();

  const { data: resources, isLoading, error } = useQuery(
    'resources',
    fetchResources
  );

  if (isLoading) {
    return <p>Loading resources...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching resources.</p>;
  }

  return (
    <div className={styles.resourceDirectory}>
      <h1>Resource Directory</h1>
      {resources.map((resource) => (
        <div key={resource.id} className={styles.resourceItem}>
          <h2>{resource.name}</h2>
          <p>{resource.description}</p>
          <a href={resource.link} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResourceDirectory;