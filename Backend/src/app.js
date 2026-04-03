const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const cors=require('cors');
app.use(cookieParser());
app.use(express.json());
const path = require("path");

app.use(cors({
    origin:["http://localhost:5173","http://127.0.0.1:5173","https://ai-music-recommendation-project.onrender.com"],
    credentials:true
}))

app.use(express.static(path.join(__dirname, "../public")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});


// Auth Api Router
const Router=require('./routes/auth.router');
app.use('/api/auth',Router);

const songRouter=require('./routes/song.routes');
app.use('/api/songs',songRouter);



module.exports=app;




