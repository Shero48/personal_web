"use client";
import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { HiMenu } from "react-icons/hi";
import { MdCancelPresentation } from "react-icons/md";
import { useSelector,useDispatch } from 'react-redux';
import { change_nav,change_btn } from '@/store/slice';

const header = () => {
  const nav=useSelector(state=>state.new)
  console.log("btn : ",nav)
  const dispatch=useDispatch()
  // const [state,setState]=useState('home');
  // const [btn,setBtn]=useState(false)
  // function nav_click(id){
  //   setState(id);
  //   console.log(state)
  //   setBtn(false)
  // }
  return (
    <div className='w-full h-20 bg-primary sticky top-0 z-40 flex flex-row items-center justify-between px-4 py-2'>
      <div className='ml-10 max-md:ml-4'>
        <div className='text-head font-bold tracking-1 text-text first-letter:bg-effect first-letter:pl-4 first-letter:text-primary first-letter:text-[33px] font-style'>Sunil</div>
      </div>
      <ul className='flex flex-row item-center max-md:hidden justify-between mr-16 gap-4'>
        <li  onClick={()=>dispatch(change_nav('home'))} className={`cursor-pointer duration-300 border-effect hover:font-bold hover:text-white ${nav.menu=='home'?'border-b-2 text-white font-bold ':'text-text '}`}><Link href='/'>Home</Link></li>
        <li onClick={()=>dispatch(change_nav('about'))} className={`cursor-pointer duration-300 border-effect hover:font-bold hover:text-white ${nav.menu=='about'?'border-b-2 text-white font-bold':'text-text '}`}><Link href='/about'>About</Link></li>
        <li onClick={()=>dispatch(change_nav('project'))} className={`cursor-pointer duration-300 border-effect hover:font-bold hover:text-white ${nav.menu=='project'?'border-b-2 text-white font-bold':'text-text '}`}><Link href='/project'>Project</Link></li>
        <li onClick={()=>dispatch(change_nav('contact'))} className={`cursor-pointer duration-300 border-effect hover:font-bold hover:text-white ${nav.menu=='contact'?'border-b-2 text-white font-bold':'text-text '}`}><Link href='/contact'>Contact</Link></li>
      </ul>
      <div className={`${nav.btn?'block':'hidden'} absolute top-5 right-20`}>
      <ul className={`flex flex-col bg-effect rounded-xl px-4 py-2  items-center justify-end gap-4 ${nav.btn?'block':'hidden'}`}>
        <li onClick={()=>dispatch(change_nav('home'))} className={`cursor-pointer duration-300 border-effect hover:font-bold hover:text-white ${nav.menu=='home'?'border-b-2 text-white font-bold ':'text-text max-md:text-primary '}`}><Link href='/'>Home</Link></li>
        <li onClick={()=>dispatch(change_nav('about'))} className={`cursor-pointer duration-300 border-effect hover:font-bold hover:text-white ${nav.menu=='about'?'border-b-2 text-white font-bold':'text-text max-md:text-primary'}`}><Link href='/about'>About</Link></li>
        <li onClick={()=>dispatch(change_nav('project'))} className={`cursor-pointer duration-300 border-effect hover:font-bold hover:text-white ${nav.menu=='project'?'border-b-2 text-white font-bold':'text-text max-md:text-primary'}`}><Link href='/project'>Project</Link></li>
        <li onClick={()=>dispatch(change_nav('contact'))} className={`cursor-pointer duration-300 border-effect hover:font-bold hover:text-white ${nav.menu=='contact'?'border-b-2 text-white font-bold':'text-text max-md:text-primary'}`}><Link href='/contact'>Contact</Link></li>
      </ul>
      </div>
      <div onClick={()=>dispatch(change_btn())} className='text-head text-white hidden font-bold cursor-pointer mr-4 max-md:block'>
        {!nav.btn?<HiMenu/>:<MdCancelPresentation/>}
      </div>
    </div>
  )
}

export default header