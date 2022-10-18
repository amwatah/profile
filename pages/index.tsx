import React, { useState } from "react";
import Typed from "react-typed";
import {BsFillArrowDownSquareFill,BsArrowUpCircleFill}  from "react-icons/bs"

const Home = () => {
   const [infoSectionActive, setInfoSectionActive] = useState(true)
  return (
    <div className=" overflow-x-hidden ">
      {infoSectionActive && 
       <section className=" landing relative"> 
       <div className=" flex flex-col items-center mt-10 gap-3">
        <img
          src="/images/amwatah.png"
          alt=""
          className=" w-40 h-40 rounded-full border-4 border-accent   hover:animate-tada "
        />
        <h1 className=" text-xl  my-4 font-bold">I AM</h1>
        <Typed
          strings={[
            "Amwatah Obuya",
            "A full-stack developer",
            "A mobile developer",
          ]}
          loop
          typeSpeed={80}
          className=" text-4xl text-accent"
        />
        <blockquote className=" italic flex gap-1 p-2 shadow-lg rounded-lg">
          <span className=" text-2xl font-bold">"</span>
          <span className=" text-center">
            good code runs, <br />
            better code solves problems, <br />
            perfect code changes lives
          </span>
          <span className=" text-2xl font-bold">"</span>
        </blockquote>
        
        <BsFillArrowDownSquareFill className=" mt-10 text-accent text-3xl animate-jello animate-infinite btn-circle" onClick={()=> setInfoSectionActive(false) }  />
       
      </div>
  
       </section>
      }

      {!infoSectionActive &&
             <section  className="info-section   shadow-2xl  rounded-lg flex flex-col items-center h-screen justify-center  gap-3 p-2 " >
              <h1 className=" font-bold">PERSONAL INFO</h1>
             <p className=" flex justify-evenly w-[80%] font-bold"><span className="flex-1">First Name</span><span className="flex-1">:</span><span className="flex-1">Amwatah</span></p>
             <p className=" flex justify-evenly w-[80%] font-bold"><span className="flex-1">Last Name</span><span className="flex-1">:</span><span className="flex-1">Obuya</span></p>
             <p className=" flex justify-evenly w-[80%] font-bold"><span className="flex-1">Age</span><span className="flex-1">:</span><span className="flex-1">21</span></p>
             <p className=" flex justify-evenly w-[80%] font-bold"><span className="flex-1">Nationality</span><span className="flex-1">:</span><span className="flex-1">Kenyan</span></p>
             <p className=" flex justify-evenly w-[80%] font-bold"><span className="flex-1">Languages</span><span className="flex-1">:</span><span className="flex-1">English, Swahili</span></p>
             <p className=" flex justify-evenly w-[80%] font-bold"><span className="flex-1">Profession</span><span className="flex-1">:</span><span className="flex-1">Software Engineer</span></p>
             <p className=" flex justify-evenly w-[80%] font-bold"><span className="flex-1">Address</span><span className="flex-1">:</span><span className="flex-1">Rongai, Nairobi</span></p>
             
             
             
             <BsArrowUpCircleFill className=" text-accent text-3xl animate-jello animate-infinite btn-circle" onClick={()=> setInfoSectionActive(true) }  />
       </section>
      }

    
    </div>
  );
};

export default Home;
