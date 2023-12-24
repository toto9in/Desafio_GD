import { NavLink } from "react-router-dom";

const isActiveStyle =
  "text-2xl text-red-700 font-semibold hover:text-red-700 px-4 py-2 duration-100 transition-all ease-in-out";
const isInactiveStyle =
  "text-2xl text-gray-700 font-semibold hover:text-red-700 px-4 py-2 duration-100 transition-all ease-in-out";



  export const Header = () => {
    return (
      <header className=" fixed backdrop-blur-md z-50 inset-x-0 top-0 flex justify-between items-center px-12 md:px-20 py-6 bg-white">
        <p className="text-2xl text-gray-700 font-semibold">Desafio Grão Direto</p>
        <nav className="flex items-center justify-center gap-8">
          <ul className="flex items-center">
            {/* Navlink isActive property */}
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyle : isInactiveStyle
              }
              to={"/main"}
            >
              Restaurantes
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isInactiveStyle : isInactiveStyle
              }
            
            >
              Pedidos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isInactiveStyle: isInactiveStyle
              }
              to={"/profile"}
            >
              Perfil
            </NavLink>
          </ul>
        </nav>
      </header>
    );
  };