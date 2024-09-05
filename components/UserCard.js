import React from 'react';
import Link from 'next/link';
import styles from '../styles/UserCard.module.css';

const UserCard = ({ user }) => {
  return (
    <li className={styles.userCard}>
      <Link href={`/user/${user.id}`}>
        <a>
          <img src={user.profilePicture} alt={user.username} className={styles.profilePicture} />
          <div className={styles.userInfo}>
            <h3>{user.username}</h3>
            <p>{user.bio}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default UserCard;