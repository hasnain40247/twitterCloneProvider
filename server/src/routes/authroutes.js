const express=require('express');
const mongoose=require('mongoose');
const User= mongoose.model('User');
const jwt=require('jsonwebtoken')
const router=express.Router();

router.post('/signup',async (req,res)=>{
  console.log("Inside function");
    const {email,name,passw}=req.body;
    console.log("server");
    console.log(email);
    console.log(name);
    console.log(passw);
    let username = name.split(" ")[0]+(Math.floor(Math.random() * 9000) + 1)
    console.log(username);
    var num=Math.floor(Math.random() * 200) + 1
    var img=`https://source.unsplash.com/random/200x200?sig=${num}`
    console.log(img);
    try{
        const user=new User({username, img,email,name,password:passw})
        await user.save()
        const token=jwt.sign({userId:user._id},"SECRET_SPIDER_SUPER")
        res.send({token,user});
    }
    catch(err){
        res.send(err)
    }

});


router.post('/signin',async (req,res)=>{
    const {email,passw}=req.body;
    if(!email || !passw){
        return res.status(422).send({error:"Errors"})
    }
    
    const user=await User.findOne({email})
const token=jwt.sign({userId:user._id},"SECRET_SPIDER_SUPER")
res.send({token,user})
    if(!user){
        return res.status(404).send({error:"Errors"})
    }
    try{await user.comparePassword(passw)}
    catch(err){
        return res.status(422).send({error:"Errors"})
        
    }
})

module.exports=router;