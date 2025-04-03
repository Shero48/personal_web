import React from 'react'
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { SiHackerrank } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { useSelector,useDispatch } from 'react-redux';
import { change_nav,change_btn } from '@/store/slice';
import Link from 'next/link'

const Footer = () => {
  const dispatch=useDispatch();
  return (
   <div className='w-full h-auto z-4 relative bottom-0 bg-primary  flex flex-col items-center'>
      <div className='w-full h-full bg-primary max-md:flex-col gap-4  flex flex-row items-start justify-around px-8 py-4'>
          <ul className='flex flex-col text-text item-center  justify-between'>
            <div className='font-bold text-xl'>Quick Links</div>
            <li onClick={()=>dispatch(change_nav('home'))} className='cursor-pointer mt-2 duration-300 hover:font-bold hover:text-white'><Link href='/'>Home</Link></li>
            <li onClick={()=>dispatch(change_nav('about'))} className='cursor-pointer duration-300 hover:font-bold hover:text-white'><Link href='/about'>About</Link></li>
            <li onClick={()=>dispatch(change_nav('project'))} className='cursor-pointer duration-300 hover:font-bold hover:text-white'><Link href='/project'>Project</Link></li>
            <li onClick={()=>dispatch(change_nav('contact'))} className='cursor-pointer duration-300 hover:font-bold hover:text-white'><Link href='/contact'>Contact</Link></li>
          </ul>
          <div className='flex flex-col text-effect item-center justify-between'>
            <h1 className='font-bold text-xl'>Contact</h1>
            <p className='flex flex-row items-center gap-2 mt-2 cursor-pointer duration-300 hover:font-bold hover:text-white'><IoIosCall className='text-2xl'/><a href='tel:+91 6383990952'>+91 6383990952</a></p>
            <p className='flex flex-row items-center gap-2 mt-2 cursor-pointer duration-300 hover:font-bold hover:text-white'><MdOutlineMail className='text-2xl'/><a href='mailto:sunils42212@gmail.com'>sunils42212@gmail.com</a></p>
          </div>
          <div className='flex flex-col text-text item-center justify-between'>
            <h1 className='font-bold text-xl'>Follow Us</h1>
            <div className='flex flex-row gap-4 mt-2 text-xl'>
              <div className='border-2 p-1 cursor-pointer rounded-md hover:bg-text hover:text-primary duration-300 hover:outline-2 outline-effect outline-offset-4  border-base'><a href='https://www.hackerrank.com/profile/sunils66059' target='_blank'><SiHackerrank/></a></div>
              <div className='border-2 p-1 cursor-pointer rounded-md hover:bg-text hover:text-primary duration-300 hover:outline-2 outline-effect outline-offset-4  border-base'><a href='https://www.instagram.com/shero_4_8/profilecard/?igsh=cjhwYjBqcmNuN2Jz' target="_blank"><BsInstagram/></a></div>
              <div className='border-2 p-1 cursor-pointer rounded-md hover:bg-text hover:text-primary duration-300 hover:outline-2 outline-effect outline-offset-4  border-base'><a href='https://www.linkedin.com/in/sunil-kumar-232599281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><CiLinkedin/></a></div>
              <div className='border-2 p-1 cursor-pointer rounded-md hover:bg-text hover:text-primary duration-300 hover:outline-2 outline-effect outline-offset-4  border-base'><a href='https://github.com/Shero48' target='_blank'><LuGithub/></a></div>
            </div>
          </div>
        </div>
        <hr className='w-2/3 m-2 text-effect text-center'/>
        <h1 className='mb-4 text-base flex flex-row text-center max-md:text-[12px]'>Copyright ©2025 All rights reserved | This is created by<p className='text-effect ml-2'>Sunil</p></h1>
   </div>
  )
}

export default Footer
