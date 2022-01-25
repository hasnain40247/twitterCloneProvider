require("./src/models/User")
require("./src/models/Chirps")
const express= require('express');
const mongoose=require('mongoose')
const authRoutes=require("./src/routes/authroutes")
const requireAuth=require("./src/middlewares/requireAuth")
const bodyParser=require('body-parser')
const chirpRoutes=require("./src/routes/chirpRoutes")
const app=express();
app.use(bodyParser.json())
app.use(authRoutes);
app.use(chirpRoutes);

const mongoUri='mongodb+srv://admin:TDLyK05sruUsFYI4@cluster0.xv5zr.mongodb.net/chirpDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
})
app.get("/",requireAuth,(req,res)=>{
    res.send("hi there")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("listening on port 3000");
})