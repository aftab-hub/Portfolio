import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/profile", {
      credentials: "include"
    })
      .then(res => {
        if (!res.ok) throw new Error("Not logged in");
        return res.json();
      })
      .then(data => setUser(data))
      .catch(() => {
        window.location.href = "/login";
      });
  }, []);

  const handleLogout = () => {
    window.open("http://localhost:5000/api/auth/logout", "_self");
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={user.avatar} alt="avatar" style={styles.avatar} />
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  logoutBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    background: "#ff4d4f",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Dashboard;