import React, {useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Tooltip from '../Tooltip/Tooltip';

function Navigation() {
  const [hoveredState, setHoverState] = useState({
    home: false,
    about:false,
    project:false,
    contact:false
  })
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  }

  function handleMouseEnter(iconName){
    setHoverState((prevState)=> ({ ...prevState, [iconName]: true}))
  }

  function handleMouseLeave(iconName){
    setHoverState((prevState)=> ({ ...prevState, [iconName]: false}))
  }



  return (
    <nav className="flex lg:flex-col flex-row xl:justify-center items-end md:gap-8 gap-12 justify-between navigationBackground p-8 text-sm rounded-full cursor-pointer">
        <Link href='/'>
        <Tooltip text="Home" className="absolute xl:right-16 xl:top-0 xl:ml-24 -top-10 -right-4 px-2 py-1 bg-black text-white text-xs rounded cursor-pointer">
            <FaHome 
            color={isActive('/') ? '#F4592F' : hoveredState.home ? '#6164c8' : 'black' } 
            size="1.2rem"
            onMouseEnter={() => handleMouseEnter('home')} 
            onMouseLeave={()=> handleMouseLeave('home')}
            transform={hoveredState.home ? 'scale(2)' : ''}
            />
        </Tooltip>
        </Link>

        <Link href='about'>
        <Tooltip text="About" className="absolute xl:right-16 xl:top-0 xl:ml-24 -top-10 -right-4 px-2 py-1 bg-black text-white text-xs rounded cursor-pointer" >
            <FaUser 
            color={isActive('/about') ? '#F4592F' : hoveredState.about ? '#6164c8' : 'black' } 
            size="1.2rem"
            onMouseEnter={() => handleMouseEnter('about')} 
             onMouseLeave={()=> handleMouseLeave('about')}
             transform={hoveredState.about ? 'scale(2)' : ''}
            />
        </Tooltip>
        </Link>

        <Link href='/project'>
        <Tooltip text="Projects" className="absolute xl:right-16 xl:top-0 xl:ml-24 -top-10 -right-4 px-2 py-1 bg-black text-white text-xs rounded cursor-pointer">
            <FaBookOpen 
            color={isActive('/project') ? '#F4592F' : hoveredState.project ? '#6164c8' : 'black' }  
            size="1.2rem"
            onMouseEnter={() => handleMouseEnter('project')} 
             onMouseLeave={()=> handleMouseLeave('project')}
             transform={hoveredState.project ? 'scale(2)' : ''}
            />
        </Tooltip>
        </Link>

        <Link href='/contact'>
        <Tooltip text="Contact" className="absolute xl:right-16 xl:top-0 xl:ml-24 -top-10 -right-4 px-2 py-1 bg-black text-white text-xs rounded cursor-pointer">
            <FaEnvelopeOpenText
             color={isActive('/contact') ? '#F4592F' : hoveredState.contact ? '#6164c8' : 'black' } 
             size="1.2rem"
             onMouseEnter={() => handleMouseEnter('contact')} 
             onMouseLeave={()=> handleMouseLeave('contact')}
             transform={hoveredState.contact ? 'scale(2)' : ''}
             />
        </Tooltip>
        </Link>
    </nav>
  )
}

export default Navigation