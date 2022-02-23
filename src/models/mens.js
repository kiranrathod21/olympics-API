const  mongoose=require('mongoose');

const menSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ranking:{
        type:Number,
        required:true,
        
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    //  event:{
    //     type:Number,
    //     default:"100m"
    // }
})

// we are creating a new connection
const MensRanking =new mongoose.model("MenRanking",menSchema);

module.exports=MensRanking;