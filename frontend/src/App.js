import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { Restaurant } from "./pages/Restaurant";
import { RestaurantProvider } from "./context/RestaurantContext";
import { PrivateRoutes } from "./components/ProtectedRoutes";
import { UserProvider } from "./context/UserContext";

//https://javascript.plainenglish.io/creating-protected-routes-in-react-js-securing-your-applications-routes-93d24bc885f
//https://medium.com/@chiragmehta900/creating-protected-routes-in-react-js-with-react-router-v6-28f3a3ac53d

function App() {
  return (
    <div className=" w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <UserProvider>
        <RestaurantProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/main" element={<Main />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </RestaurantProvider>
      </UserProvider>
    </div>
  );
}

export default App;
