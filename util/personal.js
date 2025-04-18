export async function Sendmail(tra,data){
    try{
            const detail=await tra.sendMail({
                from:'no@replay',
                to:'sunils42212@gmail.com',
                subject:`Message recieved`,
                html:`<div>
                  <h1>Form Recived</h1>
                  <div>Full_name : ${data.f_name}_${data.l_name}</div>
                  <div>Subject : ${data.sub}</div>
                  <div>Contact : <a href="tel:+91${data.contact}">${data.contact}</a></div>
                  <div>Email : <a href="mailto:${data.email}">${data.email}</a></div>
                  <div>Message : <p>${data.msg}</p></div>
                </div>`
            })
    }catch(err){
        console.log(err);
        return err;
    }
}