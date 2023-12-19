import express from 'express';
import RestaurantController from '../controllers/restaurantController.js';
import passport from 'passport';


const router = express.Router();

router.get('/', passport.authenticate("jwt", { session: false}), RestaurantController.getAllRestaurants);
router.get('/populate', RestaurantController.populateDatabase);

export default router;