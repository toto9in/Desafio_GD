import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  
  export function BookingCard() {
    return (
      <Card className=" max-w-80 max-h-70 shadow-lg rounded-lg">
        <CardHeader floated={false} color="blue-gray">
          <img className=" rounded-t-lg"
            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Coca-cola
            </Typography>
          </div>
          <Typography color="gray">
            Coca Cola
          </Typography>
          
        </CardBody>
      
      </Card>
    );
  }