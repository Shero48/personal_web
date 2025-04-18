"use client";
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoMdFingerPrint } from "react-icons/io";
import { useSelector,useDispatch } from 'react-redux';
import { send_msg } from '@/store/slice';
import { useState } from 'react';

const contact = () => {
    const {send,send_err,send_btn}=useSelector(state=>state.new);
    const dispatch=useDispatch();
    const [data,setData]=useState({
      f_name: '',
      l_name: '',
      email: '',
      sub: '',
      contact: '',
      msg: ''
    });
    const handle_change=(e)=>{
      setData((state)=>{return{...state,[e.target.name]:e.target.value}});
    }
    const handle_click=async(e)=>{
      e.preventDefault();
      const result=await dispatch(send_msg(data))
      if(send_msg.fulfilled.match(result)&&result){
        setData({f_name:'',l_name:'',email:'',sub:'',contact:'',msg:''})
      }
    }
    return (
          <div id='contact' className='w-full bg-effect flex flex-row max-md:flex-col max-md:pb-4 gap-8 px-4 py-2'>
          <div className='w-auto h-full flex flex-col gap-8 relative z-10 px-10 mt-20 max-md:mt-6'>
            <div className='flex flex-col'>
              <h1 className='text-head max-md:text-mob-head font-bold'>
                  Location :
              </h1>
              <div className='flex flex-row text-con ml-2 gap-2 items-center'>
               <FaLocationDot/><p>India,TamilNadu</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-head max-md:text-mob-head font-bold'>
                  Contact :
              </h1>
              <div className='flex flex-row text-con gap-2 items-center'>
               <FaPhoneAlt/><p><a href='tel:+91 6383990952'>+91 6383990952</a></p>
              </div>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-head max-md:text-mob-head font-bold'>
                  Email :
              </h1>
              <div className='flex flex-row text-con gap-2 items-center'>
               <TfiEmail/><p><a href='mailto:sunils42212@gmail.com'>sunils42212@gmail.com</a></p>
              </div>
            </div>
          </div>
            <div className='w-1/2 max-md:w-full h-full relative border-l-2 boder-text pl-4'>
              <h1 className='text-head text-primary'>Contact Me!</h1>
                  <form onSubmit={(e)=>handle_click(e)}  className='w-full z-30 relative flex z-30 flex-col gap-4'>
                      <div className='w-9/10 flex flex-row gap-4'>
                          <label className='w-1/2'>
                              <input onChange={handle_change} required value={data.f_name} className='w-full mt-4 border-2 border-primary outline-none px-4 py-2 text-[15px] tracking-[2px]' placeholder='First_Name' name='f_name'/>
                          </label>
                          <label className='w-1/2'>
                              <input onChange={handle_change} required value={data.l_name} className='w-full mt-4 border-2 border-primary outline-none px-4 py-2 text-[15px] tracking-[2px]' placeholder='Last_Name' name='l_name'/>
                          </label>
                      </div>
                      <label>
                          <input onChange={handle_change} required value={data.email} className='w-9/10 mt-4 border-2 border-primary outline-none px-4 py-2 text-[15px] tracking-[2px]' placeholder='Your Email' name='email'/>
                      </label>
                      <label>
                          <input onChange={handle_change} required value={data.contact} className='w-9/10 mt-4 border-2 border-primary outline-none px-4 py-2 text-[15px] tracking-[2px]' placeholder='Your Contact' minLength='10' min='10' name='contact'/>
                      </label>
                      <label>
                          <input onChange={handle_change} required value={data.sub} className='w-9/10 mt-4 border-2 border-primary outline-none px-4 py-2 text-[15px] tracking-[2px]' placeholder='Subject' name='sub'/>
                      </label>
                      <label>
                          <textarea onChange={handle_change} required value={data.msg} className='w-9/10 mt-4 border-2 border-primary outline-none px-4 py-2 text-[15px] tracking-[2px]' placeholder='Message ...' name='msg'></textarea>
                      </label>
                      <button type='submit' className='w-1/3 max-md:w-2/4 ml-10 cursor-pointer text-con border-2 border-primary py-2 hover:bg-base hover:text-primary'>{!send_btn?'Send':'Sending...'}</button>
                  </form>
            </div>
            <IoMdFingerPrint data-aos="zoom-out-down" data-aos-duration="3000" className='w-1/2 h-2/3 absolute bottom-10 max-md:bottom-0 text-base right-0'/>
          </div>
    )
}

export default contact
