import express  from "express";
import CORS from "cors";
import restaurantRouter from "./routes/restaurantRoutes.js";

const app = express();


//middlewares
app.use(CORS());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/api/restaurants', restaurantRouter);


export default app;