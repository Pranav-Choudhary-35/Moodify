const app=require('./src/app');
const ConnectToDb=require('./src/config/database.config');

//require .env package
require('dotenv').config();



//DataBase Connected

ConnectToDb();





app.listen(process.env.PORT,()=>{

console.log(`server is running on localhost:${process.env.PORT}`);
    

})