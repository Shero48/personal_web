import { connectdb } from "@/util/connectdb";
import { user_model } from "@/model/usermodel";
import nodemailer from 'nodemailer'
import { Sendmail } from "@/util/personal";

export async function POST(req) {
    try{
        const transport=nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure:true, // true for port 465, false for other ports
            auth: {
            user:process.env.id,
            pass:process.env.pass,
            },
        })
        const {f_name,l_name,sub,contact,email,msg}=await req.json();
        connectdb()
        let data={
            f_name:f_name,
            l_name:l_name,
            email:email,
            sub:sub,
            msg:msg,
            contact:contact
        }
        const res=await user_model.insertOne({
            f_name:f_name,
            l_name:l_name,
            email:email,
            sub:sub,
            msg:msg,
            contact:contact
        })
        const detail=await transport.sendMail({
            from:'no@replay',
            to:email,
            subject:`Hello ${f_name}_${l_name}`,
            html:"<h1>Thanks for your message</h1><br/><p>quickly reply soon ...</p>"
        })
        console.log(detail)
        if(detail.accepted){
            Sendmail(transport,data);
        }
        return Response.json(res);
    }catch(err){
        console.log(err)
        return Response.json(err.message)
    }
}