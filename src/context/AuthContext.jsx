import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate checking for a saved session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('nubehug_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const fakeUser = {
            id: '1',
            name: email.split('@')[0], 
            email: email,
            avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=0d47a1&color=fff`
          };
          setUser(fakeUser);
          localStorage.setItem('nubehug_user', JSON.stringify(fakeUser));
          resolve(fakeUser);
        } else {
          reject(new Error("Email y contraseña son requeridos."));
        }
      }, 800);
    });
  };

  const register = async (name, email, password) => {
    // Mock API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const fakeUser = {
            id: '2',
            name: name,
            email: email,
            avatar: `https://ui-avatars.com/api/?name=${name}&background=00bcd4&color=fff`
          };
          setUser(fakeUser);
          localStorage.setItem('nubehug_user', JSON.stringify(fakeUser));
          resolve(fakeUser);
        } else {
          reject(new Error("Todos los campos son requeridos."));
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nubehug_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
