import React, {useState} from 'react'
import { useGlobalContext } from '@/context/Context';
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

function Home() {
  const {hoveredEffect, setHoveredEffect} = useGlobalContext()

  function handleMouseEnter(){
    setHoveredEffect('animate-arrowMove')
  }

  function handleMouseLeave(){
    setHoveredEffect('animate-arrowMoveBack')
  }
  
  return (
    <div className="translate-y-16 xl:translate-y-22 xl:p-2 p-4 text-zinc-800 h-screen my-22 ">
      <div className="flex flex-col xl:h-24 h-12 overflow-y-hidden bio">
        <span className="xl:text-8xl text-5xl">Full-Stack Developer</span>
        <span className="xl:text-8xl text-5xl">Problem Solver</span>
        <span className="xl:text-8xl text-5xl">Designer</span>
        <span className="xl:text-8xl text-5xl">Full-Stack Developer</span>
      </div>
      <div className="w-fit p-2">
        <p className="lg:w-3/4 xl:text-lg text-sm leading-8">
            Motivated and data driven Full-Stack Developer committed to leveraging my technical skills and analytical mindset to drive innovation 
            and solve complex problems from businesses and individuals. With passion for continuous learning and growth, i thrive in dynamic environments where i can apply
            data-driven insights to optimize processes and enhance efficiency. 
        </p>
      </div>

  
      <div className="relative z-8 links w-fit">
        <Image 
        src="/view_projects__3_-removebg-preview.png" 
        alt="view projects"
        width={200} 
        height={200}
        className="animate-[spin_10s_infinite]"
        />
        <div className="absolute bottom-7 translate-x-14 -translate-y-5">
        <Link href='/project'>
        <FaArrowRight 
        size="4rem"
        // transform={hoveredEffect ? "scale(2)": ''}
        className={`${hoveredEffect}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        />
        </Link>
        </div>
      </div>
    </div>
 
  )
}

export default Home