const mongoose=require('mongoose');

require('dotenv').config();

//connct to db function
const ConnectToDb=async()=>{
 
await mongoose.connect(process.env.MONGO_URI).then(()=>{
    
    console.log("DataBase Connected Sucessfully");
    
}).catch((err)=>{
    console.log("DataBase Error Occur",err);
})

}


module.exports=ConnectToDb;