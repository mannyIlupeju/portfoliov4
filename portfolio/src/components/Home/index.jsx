import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

function index() {
  return (
    <div className="translate-y-20 xl:p-2 p-4">
      <span>My name is Manny, i am a</span>
      <div className="flex flex-col xl:h-24 h-12 overflow-y-hidden bio">
        <span className="xl:text-8xl text-5xl">Full-Stack Developer</span>
        <span className="xl:text-8xl text-5xl">Problem Solver</span>
        <span className="xl:text-8xl text-5xl">Designer</span>
        <span className="xl:text-8xl text-5xl">Full-Stack Developer</span>
      </div>
      <div className="w-fit p-2">
        <p className="lg:w-3/4 xl:text-lg text-sm">
            Motivated and data driven Full-Stack Developer committed to leveraging my technical skills and analytical mindset to drive innovation 
            and solve complex problems from businesses and individuals. With passion for continuous learning and growth, i thrive in dynamic environments where i can apply
            data-driven insights to optimize processes and enhance efficiency. 
        </p>
      </div>

  
      <div className="relative">
        <Image 
        src="/view_projects__3_-removebg-preview.png" 
        alt="view projects"
        width={200} 
        height={200}
        className="animate-[spin_10s_infinite]"
        />
        <div className="absolute top-20 translate-x-14 -translate-y-5">
        <Link href='/project'>
        <FaArrowRight size="3rem"/>
        </Link>
        </div>
      </div>
    </div>
 
  )
}

export default index