import apiClient from "../api/http-common";
import { Header } from "../components/header";
import { RestaurantCard } from "../components/restaurantCard";
import React, { useState, useEffect, } from "react";

//https://react.dev/reference/react/useContext#passing-data-deeply-into-the-tree



export const Main = () => {
  const [query, setQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  

  const receiveRestaurants = async () => {
    const actualToken = localStorage.getItem("token");
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${actualToken}`,
      };
      const response = await apiClient.get(`/restaurants?query=${query}`, {
        headers,
      });
      console.log(response.data);
      setRestaurants(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    receiveRestaurants();
  }, [query]);

  return (
    <div className="pt-28 bg-gray-200 w-full min-h-screen flex flex-col justify-center items-center">
      <Header />

      <div className="max-w-[32rem] shadow-lg box-border flex items-center justify-center gap-4 bg-white backdrop-blur-md rounded-md w-full px-4 py-4">
        <input
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-full bg-transparent text-gray-800 text-lg font-semibold border-none outline-none pl-3 pr-10"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <div className="flex-grow">
        {restaurants.map((restaurant, index) => (
          <div className="p-6 justify-center" key={index}>
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};
