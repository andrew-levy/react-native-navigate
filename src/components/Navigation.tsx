import React, { useState, createContext } from 'react';

export const NavigationContext = createContext(null);

export const Navigation = ({ children }) => {
  const [routes, setRoutes] = useState([children]);
  return (
    <NavigationContext.Provider value={{ routes, setRoutes }}>
      {routes[routes.length - 1]}
    </NavigationContext.Provider>
  );
};
