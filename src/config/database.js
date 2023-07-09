import mongoose from "mongoose";


export const connect= async ()=>{

    await mongoose.connect('mongodb+srv://vk:vk1718@cluster0.r9v5rep.mongodb.net/')
}