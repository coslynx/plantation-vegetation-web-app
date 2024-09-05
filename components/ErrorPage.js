import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/ErrorPage.module.css';

const ErrorPage = () => {
  const router = useRouter();

  const handleRetry = () => {
    router.refresh();
  };

  return (
    <div className={styles.errorPage}>
      <h1>Oops! Something went wrong.</h1>
      <p>We're working on fixing it. Please try again later.</p>
      <button onClick={handleRetry}>Retry</button>
    </div>
  );
};

export default ErrorPage;