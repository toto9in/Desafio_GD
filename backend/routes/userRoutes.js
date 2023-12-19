import express from 'express'
import UserController from '../controllers/userController.js'

const router = express.Router();

router.post('/signup', UserController.signup);
router.get('/example', UserController.example);
router.post('/login', UserController.login);

export default router;