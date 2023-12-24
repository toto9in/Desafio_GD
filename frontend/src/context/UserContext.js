import React, { createContext, useState, useContext, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedToken) {
      setToken(storedToken);
    }
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};