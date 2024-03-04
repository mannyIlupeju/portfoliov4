import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function index() {
  return (
    <header className='flex md:flex-row flex-col items-center md:justify-between p-4 container mx-auto'>
    
      <Image
        src='/3dmannylogo.gif'
        height={200}
        width={200}
        alt='Manny Ilupeju 3d gif'
        priority
        />
       
      <div className='flex gap-4'>
        <span>
          <FaLinkedin size="1.2rem"/>
        </span>
        <span>
          <FaSquareTwitter size="1.2rem"/>
        </span>
        <span>
          <FaGithub size="1.2rem"/>
        </span>
      </div>
    </header>
  );
}

export default index