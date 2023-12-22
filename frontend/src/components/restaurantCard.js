import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { buttonClick, hover } from "../animations";
import { useNavigate } from "react-router-dom";
import { useRestaurant } from "../context/RestaurantContext";




export function RestaurantCard({ restaurant }) {
  return (
  
      <Card className="w-full max-w-[48rem] flex-row rounded-lg">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover rounded-lg"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            {restaurant?.name}
          </Typography>
          <Typography variant="h4" color="gray" className="mb-7 font-normal">
            {restaurant?.description}
          </Typography>
          <Typography variant="h6" color="gray" className="mb-2 font-normal">
            Endereço: {restaurant?.address}
          </Typography>
          <div className="flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 text-red-700"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 100-16 8 8 0 000 16zm1-9a1 1 0 00-1 1v4a1 1 0 102 0v-3h3a1 1 0 100-2h-4z"
                  clipRule="evenodd"
                />
              </svg>
              30-45 min
            </Typography>

            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              5.0
            </Typography>
          </div>
        <RestaurantDetails restaurant={restaurant}/>
        </CardBody>
      </Card>
  
  );
}

function RestaurantDetails({restaurant}) {
  const { setRestaurant } = useRestaurant()
  const navigate = useNavigate();

  return (
    <motion.button
      {...buttonClick}
      {...hover}
      className="flex items-center gap-2 text-red-600 text-2xl on"
      onClick={() => {
        setRestaurant(restaurant)
        navigate("/restaurant")
      }}
    >
      Ver Restaurante
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </motion.button>
  );
};

