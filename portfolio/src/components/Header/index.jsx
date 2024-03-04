import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function index() {
  return (
    <header className='flex md:flex-row flex-col items-center md:justify-between p-4 container mx-auto'>
    
      <Image
        src='/3dmannylogob:w2.gif'
        height={200}
        width={200}
        alt="Manny Ilupeju 3d gif"
        priority
        />
       
      <div className='flex gap-4'>
        <span>
          <a href="https://www.linkedin.com/in/pelumi-ilupeju/" target='_blank'>
          <FaLinkedin size="1.2rem" className=" hover:bg-violet-600"/>
          </a>
        </span>
        <span>
          <a href="https://twitter.com/dev_ilMann" target='_blank'>
          <FaSquareTwitter size="1.2rem" className="hover:bg-violet-600"/>
          </a>
        </span>
        <span>
          <a href="https://github.com/mannyIlupeju" target='_blank'>
          <FaGithub size="1.2rem" className="hover:bg-violet-600"/>
          </a>
        </span>
      </div>
    </header>
  );
}

export default index