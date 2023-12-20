import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className=" w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
