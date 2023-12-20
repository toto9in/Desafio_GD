import express  from "express";
import CORS from "cors";
import restaurantRouter from "./routes/restaurantRoutes.js";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config()
import "./auth/passport.js"





const app = express();


//middlewares

app.use(CORS());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes

app.use('/api/restaurants', restaurantRouter);
app.use('/api/users', userRouter);
app.get('*', function(req, res) { res.status(404).send('Not Found');})



export default app;