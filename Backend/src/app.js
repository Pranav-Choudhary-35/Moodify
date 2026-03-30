const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();

app.use(cookieParser());
app.use(express.json());


// Auth Api Router
const Router=require('./routes/auth.router');



app.use('/api/auth',Router);



module.exports=app;




