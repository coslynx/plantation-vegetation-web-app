"use client";

import React from "react";
import styles from "../styles/FundingOpportunities.module.css";
import { useQuery } from "react-query";
import { fetchFundingOpportunities } from "../services/fundingService";
import { useAuthContext } from "../contexts/AuthContext";

const FundingOpportunities = () => {
  const { isAuthenticated } = useAuthContext();

  const { data: opportunities, isLoading, error } = useQuery(
    "fundingOpportunities",
    fetchFundingOpportunities
  );

  if (isLoading) {
    return <p>Loading funding opportunities...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching funding opportunities.</p>;
  }

  return (
    <div className={styles.fundingOpportunities}>
      <h1>Funding Opportunities</h1>
      {opportunities.map((opportunity) => (
        <div key={opportunity.id} className={styles.opportunityItem}>
          <h2>{opportunity.name}</h2>
          <p>{opportunity.description}</p>
          <a href={opportunity.link} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default FundingOpportunities;