import { Schema, model } from "mongoose";

const hashTagSchema= new Schema({
    text:{
        type:String,
        required:true,
        unique:true
    },
    tweets:[
        {
            type:Schema.Types.ObjectId
        }
    ]
})

const Hashtag=model("Hashtag", hashTagSchema);

export default Hashtag;