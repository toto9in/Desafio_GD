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
  
  export function CardItem( {item} ) {
    return (
      <Card className=" max-w-96 max-h-70 shadow-lg rounded-lg">
        <CardHeader floated={false} color="blue-gray">
          <img className=" rounded-t-lg"
            src={item?.image}
            alt="ui/ux review check"
            style={{ height: "320px", objectFit: "cover"}}
          />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium flex-">
             {item?.name}
            </Typography>
          </div>

          <div className="flex  justify-between">
          <Typography color="gray" className="">
           {item?.description}
          </Typography>

          <Typography color="gray" className=" text-red-600 flex-shrink-0">
           R$ {item?.price.toFixed(2)}
          </Typography>
          </div>
        
          
        </CardBody>
      
      </Card>
    );
  }