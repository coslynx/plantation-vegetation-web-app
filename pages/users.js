"use client";

import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchUsers } from "../services/userService";
import UserCard from "./UserCard";
import styles from "../styles/UserList.module.css";

const UserList = () => {
  const { data: users, isLoading, error } = useQuery("users", fetchUsers);

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>An error occurred while fetching users.</p>;
  }

  return (
    <div className={styles.userList}>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;