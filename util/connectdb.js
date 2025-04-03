import mongoose from "mongoose";

export const connectdb=async()=>{
    try{
        mongoose.connect(process.env.mongo_url)
        .then(res=>console.log("DB Connected"))
        .catch(err=>console.log(err));
    }catch(err){
        console.log(err)
    }
}