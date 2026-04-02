const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const cors=require('cors');
app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


// Auth Api Router
const Router=require('./routes/auth.router');



app.use('/api/auth',Router);



module.exports=app;




