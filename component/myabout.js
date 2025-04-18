"use client";
import React, { useState,useEffect} from 'react'
import { FaAward } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const myabout = () => {
    const [value,setValue]=useState('edu');
  useEffect(()=>{
    let par=document.getElementById('par');
    const scrol=()=>{
      ['edu','skill'].forEach(val=>{
        const ele=document.getElementById(val);
        if(ele){
          const scrol=ele.getBoundingClientRect();
          if(scrol.top<=282){
            setValue('skill')
          }else{
            setValue('edu')
          }
        }
      })
    }
    par.addEventListener('scroll',scrol)
    return ()=>par.removeEventListener('scroll',scrol)
  },[])
  return (
    <div id='about' className='w-full h-auto flex flex-col px-4 py-6 bg-effect'>
        <div className='w-full h-3/5  flex flex-row max-md:flex-col items-center' data-aos="fade-right">
            <div className='w-1/2 max-md:w-9/10  h-full flex justify-center'>
              <img loading='lazy' className='w-2/4 max-md:w-9/10 h-full left-20' src='images/profile.png' alt='profile images'/>
            </div>
            <div className='w-1/2 h-full px-4 max-md:px-2 py-6 max-md:border-none max-md:w-full border-l-2 border-primary'>
              <h1 className='font-bold text-head bg-base text-primary pl-2'>About Me</h1>
            <div className='mt-6'>
              <p className='w-4/5 max-md:w-full  break-all hyphens-manual first-letter:pl-6'>
                Hi, I'm <b>S.SunilKumar</b>, a passionate Full Stack Developer with a love for building modern, responsive, and scalable web applications. I specialize in both frontend and backend development, ensuring seamless user experiences and efficient server-side operations.
              </p>
              <div className='px-4 max-md:px-0 mt-4 block flex flex-row'>
                <ul className='text-con flex flex-col font-bold gap-4'>
                    <li className='text-nowrap'>Name :</li>
                    <li className='text-nowrap'>DOB :</li>
                    <li className='text-nowrap'>Address :</li>
                    <li className='text-nowrap'>Pin Code :</li>
                    <li className='text-nowrap'>Contact :</li>
                    <li className=''>Email :</li>
                </ul>
                <ul className='text-con text-primary flex flex-col font-semibold ml-2 gap-4'>
                    <li className=''>SunilKumar S</li>
                    <li className=''>April 19 2004</li>
                    <li className=''>TamilNadu,India</li>
                    <li className=''>607 106</li>
                    <li className=''><a href='tel:+916383990952'>+91 6383990952</a></li>
                    <li className='mr-2'><a href='mailto:sunils42212@gmil.com'>sunils42212@gmil.com</a></li>
                </ul>
              </div>
              <button className='bg-primary transition-all duration-700 delay-300 px-4 py-2 mt-6 text-effect text-con hover:text-primary hover:bg-transparent cursor-pointer hover:rounded-md border-primary hover:border-2'><a href='/Sunil.pdf' download="Sunil_Resume">Download CV</a></button>
 </div>
        </div>
        </div>
        <div className='w-full  h-auto flex flex-row max-md:flex-col items-start max-md:items-start p-4 gap-4' data-aos="fade-left">
            <div className='w-1/3 h-[50vh] max-md:h-full max-md:items-start mt-6 flex flex-col items-center'>
              <ul className='text-con mt-6 flex flex-col font-bold gap-4'>
                <li className={`${value=='edu'?'bg-base text-primary px-4 py-2':''}`}>Education</li>
                <li className={`${value=='skill'?'bg-base text-primary px-4 py-2':''}`}>Skills</li>
              </ul>
            </div>
            <div id='par' className='w-1/2 h-[70vh] max-md:w-full overflow-y-scroll scrollbar-none snap-y snap-mandatory scroll-smooth mt-6 flex flex-col items-start'>
              <div id='edu'>
                <h1 className='text-head text-primary scroll-pt-6 font-bold'>Education</h1>
                <div className='flex flex-row scroll-pt-6 mt-4 gap-4'>
                    <div className='text-head text-primary mt-2'>
                      <FaAward/>
                    </div>
                    <div>
                      <h1 className='text-con text-base font-bold mb-2'>2021 - 2025</h1>
                      <h2 className='text-mob-head font-semibold  text-primary'>Bachelor of Computer Science And Engineering</h2>
                      <div className='text-con text-primary mt-2 break-all hyphens-manual'>St. Anne's College of Engineering and Technology</div>
                      <p className='text-[20px] text-primary mt-2'>Panruti - 607106</p>
                    </div>
                </div>
                <div className='flex flex-row scroll-pt-6 mt-4 gap-4'>
                    <div className='text-head text-primary mt-2'>
                      <FaAward/>
                    </div>
                    <div>
                      <h1 className='text-con text-base font-bold mb-2'>2019 - 2021</h1>
                      <h2 className='text-mob-head font-semibold text-primary'>HSC</h2>
                      <div className='text-con text-primary mt-2 break-all hyphens-manual'>St. John's Higher Secondary School</div>
                      <p className='text-[20px] text-primary mt-2'>Villupuram -607107</p>
                    </div>
                </div>
                <div className='flex flex-row scroll-pt-6 mt-4 gap-4'>
                    <div className='text-head text-primary mt-2'>
                      <FaAward/>
                    </div>
                    <div>
                      <h1 className='text-con text-base font-bold mb-2'>2018 - 2019</h1>
                      <h2 className='text-mob-head font-semibold text-primary'>SSLC</h2>
                      <div className='text-con text-primary mt-2 break-all hyphens-manual'>Sri.P.Muthaiyar Hr.Sec.School</div>
                      <p className='text-[20px] text-primary mt-2'>Panruti - 607106</p>
                    </div>
                </div>
              </div>
              <div id='skill' className='mt-4 w-full'>
                <h1 className='text-head text-primary scroll-pt-6 font-bold mb-2'>Skills</h1>
                <div className='w-full h-full px-4 py-2 max-md:p-0 grid grid-cols-3 max-md:grid-cols-2 place-content-center gap-4'>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>HTML</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <ImHtmlFive2 className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>95%</b>
                    </div>
                  </div>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>CSS</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <TbBrandCss3 className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>95%</b>
                    </div>
                  </div>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>JS</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <FaJsSquare className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>80%</b>
                    </div>
                  </div>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>Tailwind CSS</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <RiTailwindCssFill className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>90%</b>
                    </div>
                  </div>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>React</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <FaReact className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>80%</b>
                    </div>
                  </div>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>Redux</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <SiRedux className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>70%</b>
                    </div>
                  </div>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>Node.Js</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <FaNodeJs className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>75%</b>
                    </div>
                  </div>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>Express.JS</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <SiExpress className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>75%</b>
                    </div>
                  </div>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>Next.Js</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <TbBrandNextjs className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>70%</b>
                    </div>
                  </div>
                  <div className='h-full mb-2  px-4 py-2 hover:scale-105 cursor-pointer bg-text flex flex-col rounded-md drop-shadow-xl items-center justify-center'>
                    <h1 className='text-con mb-2'>MongoDB</h1>
                    <div className='text-[40px] txet-primary mt-2'>
                      <SiMongodb className='text-[70px]'/>
                    </div>
                    <div className='mt-2 text-con'>
                      Exp:<b className='text-primary text-head ml-2 max-md:text-[20px]'>80%</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default myabout
