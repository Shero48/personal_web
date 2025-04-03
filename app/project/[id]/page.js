import Particular from "@/component/particular"

const page = async({params}) => {
    let {id}=await params
    return <Particular id={id}/>
}

export default page
