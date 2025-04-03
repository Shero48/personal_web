import mongoose from "mongoose";

const model=new mongoose.Schema({
    f_name:String,
    l_name:String,
    email:String,
    contact:String,
    sub:String,
    msg:String
});

export const user_model =mongoose.models.user||mongoose.model("user",model);