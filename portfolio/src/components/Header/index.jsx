import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Header() {
  const [hoverState, setHoverState] = useState({
    linkedin: false,
    twitter: false,
    github: false,
  });

  function handleHover(iconName) {
    setHoverState(prevState => ({ ...prevState, [iconName]: true }));
  }

  function removeHover(iconName) {
    setHoverState(prevState => ({ ...prevState, [iconName]: false }));
  }

  return (
    <header className='flex md:flex-row flex-col items-center md:justify-between p-4 container mx-auto'>
      <Image
        src='/3dmannylogob:w2.gif'
        height={400}
        width={400}
        alt="Manny Ilupeju 3d gif"
        priority
      />
      <div className='flex gap-4'>
        <span onMouseEnter={() => handleHover('linkedin')} onMouseLeave={() => removeHover('linkedin')}>
          <a href="https://www.linkedin.com/in/pelumi-ilupeju/" target='_blank' rel="noopener noreferrer">
            <FaLinkedin size="1.2rem" color={hoverState.linkedin ? '#6164c8' : 'black'}/>
          </a>
        </span>
        <span onMouseEnter={() => handleHover('twitter')} onMouseLeave={() => removeHover('twitter')}>
          <a href="https://twitter.com/dev_ilMann" target='_blank' rel="noopener noreferrer">
            <FaSquareTwitter size="1.2rem" color={hoverState.twitter ? '#6164c8' : 'black'}/>
          </a>
        </span>
        <span onMouseEnter={() => handleHover('github')} onMouseLeave={() => removeHover('github')}>
          <a href="https://github.com/mannyIlupeju" target='_blank' rel="noopener noreferrer">
            <FaGithub size="1.2rem" color={hoverState.github ? '#6164c8' : 'black'}/>
          </a>
        </span>
      </div>
    </header>
  );
}

export default Header;

