import { Router } from "express";
import { controller } from "./authController.js";
import { check } from "express-validator";
import middleAuth from "./middleware/authMiddleware.js";


const router = new Router();

router.post('/registration', [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({min: 4, max: 10})
], controller.registration);
router.post('/login', controller.login);
router.get('/users', middleAuth, controller.getUsers);

export default router;