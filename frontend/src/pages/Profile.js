import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";

const logout = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/");
};

export const Profile = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
      <Header />
      <div className="flex flex-col items-center justify-center w-1/2 h-1/2 bg-white rounded-lg">
        <h1 className="text-3xl font-bold">Perfil</h1>
        <h2 className="text-xl font-bold">Nome: {user.name}</h2>
        <h2 className="text-xl font-bold">Email: {user.email}</h2>
        <motion.button
          {...buttonClick}
          onClick={() => logout(navigate)}
          className=" mt-5 px-6 py-4 rounded-md bg-red-600 cursor-pointer text-white text-2xl capitalize hover:bg-red-700 font-bold"
        >
          Logout
        </motion.button>
      </div>
    </div>
  );
};
