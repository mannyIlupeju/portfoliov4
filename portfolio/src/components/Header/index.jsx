import React, {useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { HiMiniDocumentText } from "react-icons/hi2";
import Tooltip from '../Tooltip/Tooltip';

function Header() {
  const [hoverState, setHoverState] = useState({
    linkedin: false,
    twitter: false,
    github: false,
    resume: false,
    title: false
  });
  
  


  function handleHover(iconName) {
    setHoverState(prevState => ({ ...prevState, [iconName]: true }));
  }

  function removeHover(iconName) {
    setHoverState(prevState => ({ ...prevState, [iconName]: false }));
  }

  return (
    <header className='flex md:flex-row flex-col items-center md:justify-between p-8 gap-4 container mx-auto'>
      <Link href='/home'>
        <h1 className="font-bold text-4xl text-black transition ease-in-out delay-120">Manny Ilupeju</h1>
      </Link>
     
      <div className='flex gap-4'>
        <Tooltip text='LinkedIn' className="absolute top-8 -left-3 text-black text-xs">
        <span onMouseEnter={() => handleHover('linkedin')} onMouseLeave={() => removeHover('linkedin')} className="links">
          <a href="https://www.linkedin.com/in/pelumi-ilupeju/" target='_blank' rel="noopener noreferrer">
            <FaLinkedin size="1.2rem" color={hoverState.linkedin ? '#6164c8' : 'black'} transform={hoverState.linkedin ? 'scale(3)' : ''}/>
          </a>
        </span>
        </Tooltip>

        <Tooltip text="Twitter" className="absolute top-8 -left-3  text-black text-xs">
        <span onMouseEnter={() => handleHover('twitter')} onMouseLeave={() => removeHover('twitter')} className="links">
          <a href="https://twitter.com/dev_ilMann" target='_blank' rel="noopener noreferrer">
            <FaSquareTwitter size="1.2rem" color={hoverState.twitter ? '#6164c8' : 'black'} transform={hoverState.twitter? 'scale(3)' : ''}/>
          </a>
        </span>
        </Tooltip>

        <Tooltip text="Github" className="absolute top-8 -left-3 text-black text-xs">
        <span onMouseEnter={() => handleHover('github')} onMouseLeave={() => removeHover('github')} className="links">
          <a href="https://github.com/mannyIlupeju" target='_blank' rel="noopener noreferrer">
            <FaGithub size="1.2rem" color={hoverState.github ? '#6164c8' : 'black'} transform={hoverState.github ? 'scale(3)' : ''}/>
          </a>
        </span>
        </Tooltip>


        <Tooltip text="Resume" className="absolute top-8 -left-3 text-black text-xs">
        <span onMouseEnter={() => handleHover('resume')} onMouseLeave={()=> removeHover('resume')} className="links">
          <a href='https://drive.google.com/file/d/1vpIBrrpZksFVPZsgC4i_mPBrPotby70G/view?usp=sharing' target='_blank' rel="noopener noreferrer">
          <HiMiniDocumentText size="1.2rem" color={hoverState.resume ? '#6164c8' : 'black'} transform={hoverState.resume ? 'scale(3)' : ''}/>
          </a>
        </span>
        </Tooltip>
      </div>
    </header>
  );
}

export default Header;

