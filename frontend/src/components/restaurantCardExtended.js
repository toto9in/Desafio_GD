import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";

export function RestaurantCardExtended({ restaurant }) {

  const navigate = useNavigate();

  const handleRestaurantClick = () => {
    navigate("/restaurant");
  };

  return (
    <Card className="w-full max-w-[60rem] flex-row rounded-lg">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0"
      >
        <img
          src={restaurant?.image}
          alt="card-image"
          className="h-full w-full object-cover"
          style={{ height: "320px", objectFit: "cover"}}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          {restaurant?.name}
        </Typography>
        <Typography variant="h3" color="gray" className="mb-24 font-normal">
          {restaurant?.description}
        </Typography>
        <Typography variant="h4" color="gray" className="mb-2 font-normal">
          Endereço: {restaurant?.address}
        </Typography>
        <Typography variant="h4" color="gray" className="font-normal">
          Telefone: {restaurant?.phone}
        </Typography>
        <div className="flex items-center justify-between">
         

          
        </div>
       
      </CardBody>
    </Card>
  );
}
