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
      <div onMouseEnter={()=>handleHover('title')} onMouseLeave={()=>removeHover('title')} className="transition ease-in-out delay-120">
        {hoverState.title ? 
        <Image src="/3dmannylogob:w2.gif" alt="manny 3d logo" width={400} height={400} className="absolute left-24 top-4"/>
        : 
        <h1 className="font-bold text-4xl text-black transition ease-in-out delay-120">Manny Ilupeju</h1>
        }
      </div>
      </Link>
     
      <div className='flex gap-4'>
        <Tooltip text='LinkedIn' className="absolute top-8 -left-3 text-black text-xs">
        <span onMouseEnter={() => handleHover('linkedin')} onMouseLeave={() => removeHover('linkedin')}>
          <a href="https://www.linkedin.com/in/pelumi-ilupeju/" target='_blank' rel="noopener noreferrer">
            <FaLinkedin size="1.2rem" color={hoverState.linkedin ? '#6164c8' : 'black'} transform={hoverState.linkedin ? 'scale(2)' : ''}/>
          </a>
        </span>
        </Tooltip>

        <Tooltip text="Twitter" className="absolute top-8 -left-3  text-black text-xs">
        <span onMouseEnter={() => handleHover('twitter')} onMouseLeave={() => removeHover('twitter')}>
          <a href="https://twitter.com/dev_ilMann" target='_blank' rel="noopener noreferrer">
            <FaSquareTwitter size="1.2rem" color={hoverState.twitter ? '#6164c8' : 'black'} transform={hoverState.twitter? 'scale(2)' : ''}/>
          </a>
        </span>
        </Tooltip>

        <Tooltip text="Github" className="absolute top-8 -left-3 text-black text-xs">
        <span onMouseEnter={() => handleHover('github')} onMouseLeave={() => removeHover('github')}>
          <a href="https://github.com/mannyIlupeju" target='_blank' rel="noopener noreferrer">
            <FaGithub size="1.2rem" color={hoverState.github ? '#6164c8' : 'black'} transform={hoverState.github ? 'scale(2)' : ''}/>
          </a>
        </span>
        </Tooltip>


        <Tooltip text="Resume" className="absolute top-8 -left-3 text-black text-xs">
        <span onMouseEnter={() => handleHover('resume')} onMouseLeave={()=> removeHover('resume')}>
          <a href='https://drive.google.com/file/d/18bY_QMTq049Ci7sOoVaY9gibyxAqbP6U/view?usp=drive_link' target='_blank' rel="noopener noreferrer">
          <HiMiniDocumentText size="1.2rem" color={hoverState.resume ? '#6164c8' : 'black'} transform={hoverState.resume ? 'scale(2)' : ''}/>
          </a>
        </span>
        </Tooltip>
      </div>
    </header>
  );
}

export default Header;

