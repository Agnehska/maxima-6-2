import { user } from "./models/User.js";
import { role } from "./models/Role.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import obj from "./config.js";

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles
  }
  return jwt.sign(payload, obj.secret, {expiresIn: "24h"})
}

class authController {
  async registration(req, res){
      try{
        const errors = validationResult(req)
        if (!errors.isEmpty()){
          return res.status(400).json({message: 'Ошибка при регистрации', errors})
        }
        const {username, password} = req.body;
        const candidate = await user.findOne({username})
        if (candidate){
          return res.status(400).json({'message': 'Пользователь с таким именем уже существует'})
        }
        const hashPassword = bcrypt.hashSync(password, 3)
        const userRole = await role.findOne({value: 'ADMIN'})
        const newUser = new user({username, password: hashPassword, roles: [userRole.value]})
        await newUser.save()
        return res.status(201).json({message: 'Пользователь успешно зарегистрирован'})
      }catch (e){
        console.log(e);
        res.status(400).json({'message': 'Registration error'})
      }
  }

  async login(req, res){
    try{
      const {username, password} = req.body;
      const newUser = await user.findOne({username})
      if (!newUser){
        return res.status(400).json({message: `Пользователь ${username} не существует`})
      }
      const validPassword = bcrypt.compareSync(password, newUser.password)
      if (!validPassword){
        return res.status(400).json({message: `Введен неверный пароль`})
      }
      const token = generateAccessToken(newUser._id, user.roles)
      return res.status(201).json({token})
    } catch (e){
      console.log(e);
      res.status(400).json({'message': 'Login error'})
    }   
  }

  async getUsers(req, res){
    try{
      // const userRole = new role();
      // const adminRole = new role({value: 'ADMIN'});

      // await userRole.save();
      // await adminRole.save();

      const users = await user.find()
      res.json(users)
    } catch (e){
      console.log(e)
    }   
  }
}

export const controller = new authController();