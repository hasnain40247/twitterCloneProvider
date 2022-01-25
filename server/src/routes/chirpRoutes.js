const express=require('express');
const mongoose=require('mongoose');
const User= mongoose.model('User');
const jwt=require('jsonwebtoken')
const router=express.Router();
const requireAuth=require("../middlewares/requireAuth")
const Chirp=mongoose.model('Chirp')

router.use(requireAuth)

router.get('/chirps',async (req,res)=>{

const chirps=await Chirp.find()
res.send(chirps)
});

router.get('/chirpuser/:userId',async (req,res)=>{
    const userId=req.params.userId;

    console.log("inside request");
    console.log(userId);
    const user=await User.find({_id: userId})
    console.log(user);

    res.send(user)

    // const chirps=await Chirp.find({userId: req.user._id})
    // res.send(chirps)
    });

router.delete('/chirps/:idParam', (req, res) => {

    console.log(req.params.idParam);
    Chirp.findByIdAndDelete(req.params.idParam).then((chirp) => {
        if (!chirp) {
            return res.status(404).send();
        }
        res.send(chirp);
    }).catch((error) => {
        res.status(500).send(error);
    })
})
router.post('/chirps',async (req,res)=>{
    console.log("Inside");
const {chirp}=req.body;
console.log(req.user);
if(!chirp){
    return res.status(422).send({error:"Errors"})

}
try{
const chirpObj=new Chirp({chirp:chirp,userId:req.user._id, date: Date.now()})
console.log(chirpObj);
await chirpObj.save();
res.send(chirpObj)

}catch(err){
    return res.status(422).send({error:"Errors"})

}
    });


module.exports=router;