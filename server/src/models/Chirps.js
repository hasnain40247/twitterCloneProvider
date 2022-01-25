const mongoose=require('mongoose')


const chirpSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    chirp:{
        type:String,
        default:''
    },
    date:{
        type: Date
    }

})


mongoose.model('Chirp', chirpSchema);