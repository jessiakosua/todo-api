//import jwt from 'jsonwebtoken'
import { expressjwt } from "express-jwt";
import { userMode1 } from "../models/user.js";
import { permissions } from "../validators/utils/rbac.js";
export const isAuthenticated = expressjwt({
    secret: process.env.JWT_PRIVATE_KEY,
    algorithms: ["ES256"]
});

export const hasPermission = (action) => {
    return async (req, res, next) => {
        try {
            // find user from database
            const user = await userMode1.findById(req.auth.id);
            // use the role to find their permission
            const permission = permissions.find(value => value.role === user.role);
            if (!permission) {
                return res.status(403).json('no permission found');
            }
            // check if permission action include action
            if (permission.actions.includes(action)) {
                next();
             } else{
                res.staus(403).json('Action not allowed!');
            }
        } catch (error) {
            next(error);

        }
    }
}

//export const isAuthenticated = (req, res, next) => {
// try {
// Get authorization header
//const authorization = req.headers.authorization;
// Extract token fron authorization header
// const token = authorization.split('')[1];
// verify and decode token to get user
// const decoded = jwt.verify(
//  token,
// process.env.JWT_PRIVATE_KEY
//);
// attach user to request
// req.user = { id: decoded.id }
// hand over request to the next middleware/ controller
//next();
// } catch (error) {
//      next(error);
//  }
//}