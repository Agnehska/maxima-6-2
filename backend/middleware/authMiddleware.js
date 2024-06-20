import jwt from 'jsonwebtoken';
import obj from '../config.js'

const middleAuth = function (req, res, next){
  if (req.method === 'OPTIONS'){
    next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token){
      return res.status(403).json({message: 'Пользователь не авторизован'})
    }
    console.log(jwt.verify(token, obj.secret).username)
    const decodedData = jwt.verify(token, obj.secret)
    req.user = decodedData
    next()
  } catch (e) {
    console.log(e)
    return res.status(403).json({message: 'Пользователь не авторизован'})
  }
}

export default middleAuth;