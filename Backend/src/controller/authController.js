const userModel=require('../models/user.model');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const bcrypt=require('bcrypt')
const blacklistModel=require('../models/blacklist.model');



//register controller Api

async function registerController(req,res) {
    
const {username,email,password}=req.body;

const isUserExist=await userModel.findOne({
    $or:[
        {username},
        {email}
    ]
}) 




if(isUserExist){

    res.status(400).json({
        message:"User is already exist"
    })

}


const hash=await  bcrypt.hash(password,10);


const user=await userModel.create({

username:username,
email:email,
password:hash

})

const token=jwt.sign({
    id:user._id,
    username:user.username
},process.env.JWT_SECRET,{expiresIn:"3d"})


res.cookie("token",token);

res.status(201).json({
    message:"user register sucessfully",

    user:{
        id:user._id,
        username:user.username,
        email:user.email
    }

})


}



//login controller Api

async function loginController(req,res){

const {username,email,password}=req.body;

const user=await userModel.findOne({

    $or:[
        {username},
        {email}
    ]
}).select('+password');

if(!user){
    re.status(401).json({
        message:"Invalid Credentials"
    })
}


const matchPassword=await bcrypt.compare(password,user.password);

if(!matchPassword){
    res.status(400).json({
        message:"Invalid Credentials"
    })
}

//  user= await userModel.createOne({

//     user:user.username,
//     email:user.email,
//     password:matchPassword

// })

const token=jwt.sign({
    id:user._id,
    username:user.username
},
process.env.JWT_SECRET,
{expiresIn:'3d'})


res.cookie("token",token);



res.status(201).json({
    message:'user login sucessfully',
    user:{
        id:user._id,
        username:user.username,
        email:user.email
    }

})


}

//get-me api

async function getMeController(req,res){

    const userId=req.user.id;

    const user=await userModel.findById(userId);

    if(!user){
        res.status(404).json({
            message:"User not found"
        })
    }

    res.status(200).json({
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })

}



async function logoutController(req,res){

    const token=req.cookies.token;

    res.clearCookie("token");

await blacklistModel.create({
    token:token
})

res.status(201).json({
    message:"User logout successfully"

})

}

module.exports={
    loginController,
    registerController,getMeController,logoutController
}
