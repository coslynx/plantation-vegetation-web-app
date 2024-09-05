"use client";

import React, { useState } from "react";
import styles from "../styles/Signup.module.css";
import { useAuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

const Signup = () => {
  const { signup } = useAuthContext();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.signup}>
      <h1>Sign Up</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/login">Sign In</a>
      </p>
    </div>
  );
};

export default Signup;