import express from "express";
import { connect } from "./config/database.js";
import Tweet from "./models/tweet.js";

const App=express();


App.listen(3000, async ()=>{
    console.log(`server started at 3000`)

  connect()
    console.log("MongoDB connected")

    Tweet.create({
        content:"This is first tweet",
        likes:25,
        noOfReTweet:20,
        comment:"This is first comment"
    })
})



