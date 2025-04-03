import {connectdb} from '@/util/connectdb';
import {user} from '@/model/promodel';
export async function GET() {
    try{
        connectdb();
        const data=await user.find({});
        return Response.json(data);
    }catch(err){
        console.log(err);
        return Response.json(err)
    }
}