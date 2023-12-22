import { Header } from "../components/header";
import { BookingCard } from "../components/teste";
import { RestaurantCardExtended } from "../components/restaurantCardExtended";
import { useRestaurant } from "../context/RestaurantContext";
import { Typography } from "@material-tailwind/react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos do carrossel

// https://reactjsexample.com/a-lightweight-production-ready-carousel-for-react/

export const Restaurant = () => {
  const { selectedRestaurant } = useRestaurant();

  return (
    <div className="pt-28 bg-gray-200 w-full min-h-screen items-center">
      <Header />
      <div className="flex justify-center">
        <RestaurantCardExtended restaurant={selectedRestaurant} />{" "}
      </div>
      <div className=" flex justify-start ml-96 mt-12 mb-12">
        <Typography variant="h2" color="gray">
          Pratos
        </Typography>
      </div>

      <div className=" flex justify-center">
        <Carousel>
          <div><BookingCard /></div>
          <div><BookingCard /></div>
          <div><BookingCard /></div>
          {/* Adicione quantos BookingCard você quiser */}
        </Carousel>
      </div>
    </div>
  );
};