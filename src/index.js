import express from "express";
import { connect } from "./config/database.js";
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtag.js";
import TweetRepository from "./repository/tweet-repository.js";

const App=express();


App.listen(3000, async ()=>{
    console.log(`server started at 3000`)

 await connect()
    console.log("MongoDB connected")

    // Tweet.create({
    //     content:"This is first tweet",
    //     likes:25,
    //     noOfReTweet:20,
    //     comment:"This is first comment"
    // })


  //   Hashtag.create({
  //     text:"travel",
  //     tweets:['64aab2ffb30638f0f5f795a2']
  // })

  // const tweets= await new TweetRepository().getAllTweet();
  const tweet=await new TweetRepository().deleteTweet({_id:"64aab2727e79d8740b498e1c"})
  console.log(tweet);
  
})



