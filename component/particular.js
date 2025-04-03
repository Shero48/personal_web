"use client";
import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getsingle} from '@/store/slice';

const particular =({id}) => {
    console.log(id)
    const {single,single_err,single_load}=useSelector((state)=> state.new);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getsingle(id))
      console.log("user : ",single,"load : ",single_load,"error : ",single_err,process.env.NEXT_PUBLIC_url,'/',id)
    },[])
    return (
      <div className={`w-full h-auto flex max-md:px-2 ${!single_load?'bg-primary':'bg-effect'} flex-col px-4 py-2 gap-2`}>
         {single_load?<div className='w-full h-[90vh] grid place-items-center'><div className='w-10 h-10 rounded-full border-x-4 border-primary animate-spin'></div></div>:''}
        {single&&!single_load?<>
        <h1 className='text-head max-md:text-mob-head max-md:pl-2 font-bold bg-effect  text-base pl-4'>Project Tittle : <b className='text-primary'>{single.tittle}</b></h1>
        <div className='w-full flex idden flex-row max-md:gap-4 max-md:flex-col max-md:items-center justify-center'>
          <div className='w-1/2 max-md:w-full max-md:px-2  pr-4'> 
            <img className='w-full h-full' src={single.image}/>
          </div>
          <div className='w-1/2 max-md:w-full bg-effect overflow-y-scroll scrollbar-none px-4 py-2'>
          <p className='text-con text-wrap max-md:w-full w-8/9 mt-4 leading-6 text-primary first-letter:pl-4 first-letter:font-bold first-letter:uppercase'>
            {single.dec}
          </p>
          <div className='flex flex-row my-4 gap-2'>
            <h1 className='text-con text-nowrap font-bold leading-6'>FrontEnd : </h1>
            <ul className='flex flex-row max-md:flex-col gap-2'>
              {single.front.map((val,ind)=>(
                <li key={ind} className='bg-text text-primary px-2 text-center rounded-md font-medium'>{val}</li>
              ))}
            </ul>
          </div>
         {single.back.length!=1&&single.back&&single.back.length? <div className='flex flex-row mb-4 gap-2'>
            <h1 className='text-con text-nowrap font-bold leading-6'>backEnd : </h1>
            <ul className='flex flex-row max-md:flex-col gap-2'>
                {single.back.map((val,ind)=>(
                   <li key={ind} className='bg-text text-primary px-2 text-center rounded-md font-medium'>{val}</li>
                ))}
            </ul>
          </div>:<></>}
        <ul className='my-4 list-disc list-inside gap-2' >
            {single.feature.map((val,ind)=>(
                <li key={ind}>{val}</li>
            ))}
        </ul>
        <div className='flex flex-row gap-2 pl-2'>
          <h1>Source Code:</h1>
          <a target='_blank' className='underline text-primary decoration-primary cursor-pointer underline-offset-2' href={single.link}>GitHub</a>
        </div>
        </div>
        </div>
        </>:<></>}
      </div>
    )
}

export default particular
