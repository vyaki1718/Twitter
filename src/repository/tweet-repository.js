import { error } from "console";
import Tweet from "../models/tweet.js";


class TweetRepository{

 async create(data){
    try{
        let tweet=Tweet.create(data);
        return tweet;
    }catch(error){
        console.log(error)
        throw error;
    }
 }

 async getAllTweet(){
    try {
        let tweets=Tweet.find({});
        return tweets;
    }catch(error){
        console.log(error);
    }
 }

 async getTweet(id){
    try{
        let tweet=Tweet.findById(id);
        return tweet;
    }catch(error){
        console.log(error);
    }
 }

 async deleteTweet(data){
    try {
        let tweet= Tweet.deleteOne(data);
        return tweet;
    } catch (error) {
        console.log(error)
    }
 }
}

export default TweetRepository;