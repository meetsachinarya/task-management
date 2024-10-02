import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log(children);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const login = (username, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (userExists) {
      setUser(userExists);
      localStorage.setItem("user", JSON.stringify(userExists));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
