
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// exports.protect = async (req, res, next) => {
//   let token=req.headers.authorization.split(" ")[1];
//   try {
//     const authHeader = req.headers.authorization;
//     console.log("Incoming Auth Header:", authHeader); // 🔍 Debug log

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ message: 'Not authorized, no token' });
//     }

//     const token = authHeader.split(' ')[1];

//     if (!token) {
//       return res.status(401).json({ message: 'Token missing in header' });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("Decoded Token:", decoded); // 🔍 Debug log

//     const user = await User.findById(decoded.id).select('-password');
//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     console.error('Auth error:', error.message);
//     return res.status(401).json({ message: 'Not authorized, token failed' });
//   }
// };

const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized, no token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};