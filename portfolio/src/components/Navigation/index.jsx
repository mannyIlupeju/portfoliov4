import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Tooltip from '../Tooltip/Tooltip';

function Navigation() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  }

  return (
    <nav className="flex lg:flex-col flex-row xl:justify-center items-end md:gap-8 gap-12 justify-between navigationBackground p-8 text-sm rounded-full cursor-pointer">
        <Link href='/'>
        <Tooltip text="Home">
            <FaHome color={isActive('/') ? '#F4592F' : '#6164c8'} size="1.2rem"/>
        </Tooltip>
        </Link>

        <Link href='about'>
        <Tooltip text="About">
            <FaUser color={isActive('/about') ? '#F4592F' : '#6164c8'} size="1.2rem"/>
        </Tooltip>
        </Link>

        <Link href='/project'>
        <Tooltip text="Projects">
            <FaBookOpen color={isActive('/project') ? '#F4592F' : '#6164c8'} size="1.2rem"/>
        </Tooltip>
        </Link>

        <Link href='/contact'>
        <Tooltip text="Contact">
            <FaEnvelopeOpenText color={isActive('/contact') ? '#F4592F' : '#6164c8'}size="1.2rem"/>
        </Tooltip>
        </Link>
    </nav>
  )
}

export default Navigation