import React, { useState, createContext } from 'react';

export const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const [routes, setRoutes] = useState([children]);
  const currentRoute = routes[routes.length - 1];
  return (
    <NavigationContext.Provider value={{ routes, setRoutes, currentRoute }}>
      {currentRoute}
    </NavigationContext.Provider>
  );
};
