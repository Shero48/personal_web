import { user } from "@/model/promodel";
import { connectdb } from "@/util/connectdb";

export async function GET(req,{params}) {
    try{
        connectdb();
        const {id}=await params;
        console.log(id)
        const data=await user.findOne({_id:id});
        return Response.json(data);
    }catch(err){
        console.log(err);
    }
}