import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/PlantCard.module.css';

const PlantCard = ({ plant }) => {
  return (
    <li className={styles.plantCard}>
      <Link href={`/plant/${plant.id}`}>
        <a>
          <div className={styles.plantImage}>
            <Image
              src={plant.image}
              alt={plant.name}
              width={200}
              height={150}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.plantInfo}>
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PlantCard;