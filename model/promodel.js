import mongoose from "mongoose";
import { Schema as schema } from "mongoose";
const model=new schema({
    tittle:{
        type:String,
    },
    dec:{
        type:String,
    },
    image:{
        type:String,
    },
    front:[String],
    back:{
        type:Array
    },
    link:{
       type:String
    },
    feature:[String]
},{toJSON:{virtuals:true}});
model.virtual("short_des").get(function(){
    return this.dec.substring(0,100)+' ...';
})

export const user=mongoose.models.product||mongoose.model("product",model);
