import apiClient from "../api/http-common";
import { Header } from "../components/header";
import { HorizontalCard } from "../components/restaurantCard";
import React, { useState, useEffect } from "react";


export const Main = () => {
  const [restaurants, setRestaurants] = useState([]);

  const receiveRestaurants = async () => {
    const actualToken = localStorage.getItem("token");
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${actualToken}`,
      };
      const response = await apiClient.get("/restaurants", { headers });
      console.log(response.data);
      setRestaurants(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    receiveRestaurants();
  }, []);

  return (
    <div className="pt-24 bg-gray-200 w-full flex flex-col justify-center items-center h-full ">
      <Header />
      {restaurants.map((restaurant, index) => (
        <div className="p-6 items-center justify-center" key={index}>
          <HorizontalCard restaurant={restaurant} />
        </div>
      ))}
    </div>
  );
};
