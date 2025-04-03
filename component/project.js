"use client";
import React, { useEffect } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux';
import Link from 'next/link';
import { getpost ,increment,decrement} from '@/store/slice';

const project = () => {
    const {user,load,err,pro}=useSelector(state=>state.new);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getpost());
      console.log("load :",load,"err :",err,"post :",user,pro)
    },[dispatch])
    return (
      <div id='project' className='w-full h-[90vh] bg-[url(@/public/pro_bann.png)] bg-cover flex flex-col items-center'>
        {load?<div className='w-full h-full grid place-items-center'><div className='w-10 h-10 rounded-full border-x-4 border-primary animate-spin'></div></div>:''}
           {user.lenght!=0&&!load &&pro<=6?
         <div className='w-full h-7/10 flex my-4 flex-row items-center px-6 max-md:px-2 justify-between'>
            <div onClick={()=>dispatch(decrement())} className='text-[50px] ml-6 max-md:ml-2 cursor-pointer'><MdKeyboardArrowLeft/></div>
              <div data-aos="flip-up" className='w-1/2 max-md:w-full h-full max-md:h-1/2  border-2 border-red-400 relative'>
              <img className='w-full h-full cursor-pointer' src={user[pro].image??''}/>
              <div className='my-4 px-4 py-2'>
               <h1 className='text-head mb-2 font-bold'>{user[pro].tittle}</h1>
               <p className='text-[15px] first-letter:pl-4 font-semibold'>
                 {user[pro].short_des} <Link href={`/project/${user[pro]._id}`}>Read More</Link>
               </p>
              </div>
            </div>
            <div onClick={()=>dispatch(increment())} className='text-[50px] mr-6 max-md:mr-2 cursor-pointer'><MdKeyboardArrowRight/></div>
         </div>:<></>}
      </div>
    )
}

export default project
