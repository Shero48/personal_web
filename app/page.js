"use client";
import { ImHtmlFive2 } from "react-icons/im";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandCss3 } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import Link from 'next/link'
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useSelector,useDispatch } from 'react-redux';
import { change_nav,change_btn } from '@/store/slice';

export default function Home() {
  const dispatch=useDispatch()
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration for animation (optional)
    });
  }, []);

  return (
      <div id="home" className="w-full relative h-[90vh] flex items-center justify-center">
        {/* icons */}
        <div className="w-10 icon h-10 animate-ping max-md:top-40 max-md:left-20 absolute top-44 left-44 grid rounded-md text-3xl text-primary place-items-center bg-effect drop-shadow-md"><ImHtmlFive2/></div>
        <div className="w-10 icon h-10 animate-bounce absolute max-md:top-30 max-md:right-20 top-50 right-50 grid rounded-md text-3xl text-primary place-items-center bg-effect drop-shadow-md"><TbBrandCss3/></div>
        <div className="w-10 icon h-10 animate-bounce max-md:bottom-40 max-md:left-20 absolute bottom-44 left-44 grid rounded-md text-3xl text-primary place-items-center bg-effect drop-shadow-md"><FaReact/></div>
        <div className="w-10 icon h-10 animate-ping max-md:bottom-45 max-md:right-20  absolute bottom-44 right-44 grid rounded-md text-3xl text-primary place-items-center bg-effect drop-shadow-md"><FaJsSquare/></div>
        <div className="w-10 icon h-10 animate-bounce max-md:top-50 max-md:right-60 absolute top-70 left-70 grid rounded-md text-3xl text-primary place-items-center bg-effect drop-shadow-md"><FaNodeJs/></div>
        <div className="w-10 icon h-10 animate-ping max-md:top-70 max-md:left-40 absolute top-70 right-70 grid rounded-md text-3xl text-primary place-items-center bg-effect drop-shadow-md"><RiNextjsFill/></div>
        <div className="w-10 icon h-10 absolute animate-bounce max-md:top-80 max-md:left-10 top-30 left-150 grid rounded-md text-3xl text-primary place-items-center bg-effect drop-shadow-md"><SiMongodb/></div>
        <div className="w-10 icon h-10 absolute animate-ping max-md:bottom-60 max-md:right-30 bottom-30 right-150 grid rounded-md text-3xl text-primary place-items-center bg-effect drop-shadow-md"><RiTailwindCssFill/></div>
        <div className="absolute top-2  animate-pulse left-4 text-[100px] font-[1000]  font-back text-base tracking-[2px]">MERN</div>
        <div className='flex flex-col z-2 items-center justify-center text-center mb-4'>
          <span className="text-con">Hi ther, I am</span>
          <span className="text-[80px] text-white font-[900] text-nowrap max-md:text-[60px] text-border font-style leading-[1.5]" data-aos="zoom-in-up">Sunil Kumar</span>
          <div className="text-head  inline-block text-nowrap animate-text-bling overflow-hidden px-2 border-r-4 border-text font-[500] animation-delay-500 text-text">Full Stack Developer</div>
          <div className="mt-2 flex flex-row gap-2">
            <button className="cursor-pointer bg-effect text-primary px-4 py-2 text-md mt-6 border-2 border-primary transition-all duration-700 hover:bg-primary hover:text-effect focus:text-effect fond-semibold rounded-md" onClick={()=>dispatch(change_nav('contact'))}><Link href='/contact'>Hire Me!</Link></button>
            <button className='bg-primary transition-all duration-700 delay-300 px-4 py-2 mt-6 text-effect text-con hover:text-primary hover:bg-transparent cursor-pointer hover:rounded-md border-primary hover:border-2'><a>Download CV</a></button>
          </div>
            <p onClick={()=>dispatch(change_nav('about'))} className="w-1/2 text-con max-md:hidden mt-4 cursor-pointer txet-left">
            <Link href='/about'>
              Hi, I'm S.SunilKumar, a passionate Full Stack Developer with a love for building modern, responsive, and scalable web applications....
            </Link>
            </p>
        </div>
        <div className="absolute bottom-6 left-10 text-[100px] font-[1000] max-md:float-right font-back text-base tracking-[2px]">SUNIL</div>
      </div>
  );
}
