const express=require('express');

const Router=express.Router();
const authController=require('../controller/authController');

Router.post('/register',authController.registerController);

Router.post('/login',authController.loginController);




module.exports=Router;