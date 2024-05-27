// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import authService from './auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      authService.getProfile(token).then(response => {
        setUser(response.data);
      }).catch(() => {
        setToken(null);
        setUser(null);
      });
    }
  }, [token]);

  const login = (username, password) => {
    return authService.login(username, password).then(response => {
      setToken(response.data.access);
      localStorage.setItem('token', response.data.access);
      return authService.getProfile(response.data.access);
    }).then(response => {
      setUser(response.data);
    });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  const register = (username, email, password, password2) => {
    return authService.register(username, email, password, password2);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;