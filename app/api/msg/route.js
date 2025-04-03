import { connectdb } from "@/util/connectdb";
import { user_model } from "@/model/usermodel";
import nodemailer from 'nodemailer'

export async function POST(req) {
    try{
        const transport=nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure:true, // true for port 465, false for other ports
            auth: {
            user: "sunils42212@gmail.com",
            pass: "kcpa erdm gopp qkwg",
            },
        })
        const {f_name,l_name,sub,contact,email,msg}=await req.json();
        console.log(f_name,l_name,sub,contact,email,msg)
        connectdb()
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
        console.log(detail);
        return Response.json(res);
    }catch(err){
        console.log(err)
        return Response.json(err.message)
    }
}