const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  let code = 400;  
  try {
    const token = req.headers.authorization;
      if (!token) {
        code = 401;
        throw new Error('Acceso denegado');
      }

      const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
      req.user = verified;
      next();
    } catch (error) {
      res.status(code).json({ error: 'El token expiró o no es válido' });
    }
}

module.exports = verifyToken;