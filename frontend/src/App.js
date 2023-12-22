import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Restaurant } from "./pages/Restaurant";
import { RestaurantProvider } from "./context/RestaurantContext";

function App() {


  return (
  
      <div className=" w-screen min-h-screen h-auto flex flex-col items-center justify-center">
        <RestaurantProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
        </RestaurantProvider>
      </div>

  );
}

export default App;
