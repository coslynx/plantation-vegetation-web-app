import React from 'react';
import styles from '../styles/EducationalContent.module.css';
import { useQuery } from 'react-query';
import { fetchEducationalContent } from '../services/educationService';
import { useAuthContext } from '../contexts/AuthContext';

const EducationalContent = () => {
  const { isAuthenticated } = useAuthContext();

  const { data: content, isLoading, error } = useQuery(
    'educationalContent',
    fetchEducationalContent
  );

  if (isLoading) {
    return <p>Loading educational content...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching educational content.</p>;
  }

  return (
    <div className={styles.educationalContent}>
      <h1>Educational Content</h1>
      {content.map((item) => (
        <div key={item.id} className={styles.contentItem}>
          <h2>{item.title}</h2>
          {item.type === 'video' && (
            <video controls>
              <source src={item.source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {item.type === 'text' && <p>{item.content}</p>}
          {item.type === 'quiz' && (
            <div>
              {/ Implement quiz component here /}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EducationalContent;