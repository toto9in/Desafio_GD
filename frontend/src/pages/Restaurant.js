import { Header } from "../components/header";
import { CardItem } from "../components/CardItem";
import { RestaurantCardExtended } from "../components/restaurantCardExtended";
import { useRestaurant } from "../context/RestaurantContext";
import { Typography } from "@material-tailwind/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer } from "../components/Footer";

export const Restaurant = () => {
  const { selectedRestaurant } = useRestaurant();

  const dishes = selectedRestaurant?.dishes || [];
  const drinks = selectedRestaurant?.drinks || [];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="pt-28 bg-gray-200 w-full min-h-screen items-center">
      <Header />
      <div className="flex justify-center">
        <RestaurantCardExtended restaurant={selectedRestaurant} />{" "}
      </div>
      <div className=" flex justify-start ml-96 mt-6 mb-6">
        <Typography variant="h2" color="gray">
          Pratos
        </Typography>
      </div>

      <div className="flex justify-center mx-60">
        <Carousel
          infinite={true}
          containerClass="w-full"
          responsive={responsive}
        >
          {dishes.map((dish, index) => (
            <div className="flex justify-center" key={index}>
              <CardItem item={dish} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className=" flex justify-start ml-96 mt-6 mb-6">
        <Typography variant="h2" color="gray">
          Bebidas
        </Typography>
      </div>

      <div className="flex justify-center mx-60">
        <Carousel
          
          infinite={true}
          containerClass="w-full"
          responsive={responsive}
        >
          {drinks.map((drink, index) => (
            <div className="flex justify-center" key={index}>
              <CardItem item={drink} />
            </div>
          ))}
        </Carousel>
      </div>
      
      <div className="flex justify-center mt-10">
      <div className="flex justify-center mt-10">
        <Footer />
      </div>
      </div>
    </div>
  );
};
