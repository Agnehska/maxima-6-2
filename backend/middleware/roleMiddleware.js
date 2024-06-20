import obj from "../config.js";
import jwt from 'jsonwebtoken';

function roleMiddle(userRoles) {
  return function(req, res, next){
    if (req.method === 'OPTIONS'){
      next()
    }
  
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token){
        return res.status(403).json({message: 'Пользователь не авторизован'})
      }
      console.log(jwt.verify(token, obj.secret))
      const {roles} = jwt.verify(token, obj.secret)
      let hasRole = false
      roles.forEach(role => {
        if (userRoles.includes(role)){
            hasRole = true
        }
      })
      if (!hasRole){
        return res.status(403).json({message: 'У вас нет доступа'})
      }
      next()
    } catch (e) {
      console.log(e)
      return res.status(403).json({message: 'Пользователь не авторизован'})
    }
  }
}

export default roleMiddle;