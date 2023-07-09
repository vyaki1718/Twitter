import mongoose from "mongoose";


const tweetSchema=new mongoose.Schema({
    content:{
        type:String
    },
    likes:{
        type:Number
    },
    noOfReTweet:{
        type:Number
    },
    comment:{
        type:String
    }
})

const Tweet= mongoose.model('Tweet', tweetSchema)

export default Tweet;