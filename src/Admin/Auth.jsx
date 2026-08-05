import React from 'react'

const Auth = () => {

  const handleLogin = () => {
    window.open("http://localhost:5000/api/auth/google", "_self");
  };

  
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign in</h2>

        <button style={styles.googleBtn} onClick={handleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google"
            style={styles.icon}
          />
          Continue with Google
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
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    marginBottom: "20px",
    fontWeight: "500",
  },
  googleBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  
}

export default Auth