const mongoose=require('mongoose');



const userSchema=new mongoose.Schema({

username:{
    type:String,
    required:[true,"Username is required"],
    unique:[true,"Username is already exist"]
},
email:{
      type:String,
    required:[true,"Username is required"],
    unique:[true,"Username is already exist"] 
},
password:{
     type:String,
    required:[true,"Username is required"],
    unique:[true,"Username is already exist"] 
}

})



const userModel=mongoose.model('users',userSchema);


module.exports =userModel;