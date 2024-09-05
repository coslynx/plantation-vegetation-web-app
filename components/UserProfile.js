import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchUser } from '../services/userService';
import { useUserContext } from '../contexts/UserContext';
import ProjectCard from './ProjectCard';
import ForumPostCard from './ForumPostCard';
import styles from '../styles/UserProfile.module.css';

const UserProfile = () => {
  const { users } = useUserContext();
  const { query } = useQuery('user', fetchUser);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (query.data) {
      setUser(query.data);
    }
  }, [query.data]);

  if (query.isLoading) {
    return <p>Loading user profile...</p>;
  }

  if (query.isError) {
    return <p>An error occurred while fetching user profile.</p>;
  }

  if (!user) {
    return null;
  }

  const projects = user.projects.map((projectId) => users.find((u) => u.id === projectId));
  const forumPosts = user.forumPosts.map((postId) => users.find((u) => u.id === postId));

  return (
    <div className={styles.userProfile}>
      <div className={styles.userInfo}>
        <img src={user.profilePicture} alt={user.username} />
        <h2>{user.username}</h2>
        <p>{user.bio}</p>
      </div>
      <div className={styles.userProjects}>
        <h3>Projects</h3>
        {projects.length > 0 ? (
          <ul>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ul>
        ) : (
          <p>This user is not currently involved in any projects.</p>
        )}
      </div>
      <div className={styles.userForumPosts}>
        <h3>Forum Posts</h3>
        {forumPosts.length > 0 ? (
          <ul>
            {forumPosts.map((post) => (
              <ForumPostCard key={post.id} post={post} />
            ))}
          </ul>
        ) : (
          <p>This user has not made any forum posts yet.</p>
        )}
      </div>
      {/ Add more sections for connections, followers, etc. /}
    </div>
  );
};

export default UserProfile;