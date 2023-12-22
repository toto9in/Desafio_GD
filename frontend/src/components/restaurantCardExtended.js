import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { buttonClick, hover } from "../animations";
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
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
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
