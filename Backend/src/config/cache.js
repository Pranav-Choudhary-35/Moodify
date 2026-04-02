const Redis=require("ioredis").default;
require('dotenv').config();


const redis=new Redis({
    host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    password:process.env.REDIS_PASSWORD
});


redis.on("connect",()=>{
    console.log("Connected to Redis server");
})

redis.on("error",(err)=>{
    console.error("Redis connection error:",err);
})


module.exports=redis;
