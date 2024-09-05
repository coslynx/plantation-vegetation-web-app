import React from 'react';
import styles from '../styles/LandingPage.module.css';
import Image from 'next/image';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.hero}>
        <Image
          src="/images/hero-image.jpg"
          alt="Green Forest Landscape"
          width={1920}
          height={1080}
          priority
        />
        <div className={styles.heroText}>
          <h1>A Greener Future</h1>
          <p>
            Join us in our mission to empower individuals, communities, and
            organizations to actively contribute to a greener future.
          </p>
          <Link href="/projects">
            <button>Explore Projects</button>
          </Link>
        </div>
      </div>
      <div className={styles.features}>
        <h2>Our Features</h2>
        <div className={styles.feature}>
          <Image
            src="/images/plant-database.svg"
            alt="Plant Database Icon"
            width={64}
            height={64}
          />
          <h3>Plant Database</h3>
          <p>
            Browse a comprehensive database of plant species, categorized by
            climate, region, and ecological benefits.
          </p>
        </div>
        <div className={styles.feature}>
          <Image
            src="/images/project-management.svg"
            alt="Project Management Icon"
            width={64}
            height={64}
          />
          <h3>Project Management</h3>
          <p>
            Plan, track, and collaborate on plantation projects with our robust
            tools and resources.
          </p>
        </div>
        <div className={styles.feature}>
          <Image
            src="/images/community.svg"
            alt="Community Icon"
            width={64}
            height={64}
          />
          <h3>Community</h3>
          <p>
            Connect with other passionate individuals and organizations to
            exchange knowledge and support each other's initiatives.
          </p>
        </div>
        <div className={styles.feature}>
          <Image
            src="/images/funding.svg"
            alt="Funding Icon"
            width={64}
            height={64}
          />
          <h3>Funding Opportunities</h3>
          <p>
            Access a curated list of government schemes, NGO grants, and
            corporate social responsibility programs.
          </p>
        </div>
      </div>
      <div className={styles.callToAction}>
        <h2>Ready to make a difference?</h2>
        <p>
          Join our community and start planting the seeds for a greener future.
        </p>
        <Link href="/signup">
          <button>Sign Up Now</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;