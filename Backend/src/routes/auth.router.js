const express=require('express');

const Router=express.Router();
const authController=require('../controller/authController');
const authMiddleWare=require('../middleware/auth.middleware');


Router.post('/register',authController.registerController);

Router.post('/login',authController.loginController);

Router.get('/get-me',authMiddleWare.authUser,authController.getMeController);

Router.get('/logout',authController.logoutController);


module.exports=Router;