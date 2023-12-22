//https://react.dev/reference/react/useContext
import React, { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const setRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <RestaurantContext.Provider value={{ selectedRestaurant, setRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error("useRestaurant must be used within a RestaurantProvider");
  }
  return context;
};
