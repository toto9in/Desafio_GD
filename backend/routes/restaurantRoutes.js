import express from 'express';
import RestaurantController from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/', RestaurantController.getAllRestaurants);
router.get('/populate', RestaurantController.populateDatabase);

export default router;