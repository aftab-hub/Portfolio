import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/profile", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  // ⏳ While checking
  if (isAuth === null) return <h2>Checking auth...</h2>;

  // ❌ Not logged in
  if (!isAuth) return <Navigate to="/login" />;

  // ✅ Logged in
  return children;
};

export default ProtectedRoute;