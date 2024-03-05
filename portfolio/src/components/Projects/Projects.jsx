import React, {useState} from 'react'
import Image from 'next/image'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";


function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showDescription, setShowDescription] = useState(false)

 const projects = [
   {
     src: "/retrogold.png",
     alt: "retrogold website image",
     title: "Retrogold Ecommerce",
     description: "An Ecommerce website developed for a client, built with Next JS, Node JS, MongoDB, Redux and leveraging the powers of shopify and Cal",
     techStack1: [
       { icon: <SiMongodb /> },
       { icon: <SiTailwindcss /> },
       { icon: <SiRedux /> },
       { icon: <SiNextdotjs /> },
     ],
     links: [
        {icon:<FaGithub />, 
         link:'https://github.com/mannyIlupeju/rg-2',
        },
        {
         icon:<FaExternalLinkAlt/>,
         link:'https://retrogold.vercel.app/'
        }
     ]
   },
   {
     src: "/urlshortener.png",
     alt: "url shortener app",
     title: "Url Shortener App",
     description: "An App that shortens links for users and also has options for sharing across social media sites",
     techStack1: [
       { icon: <SiMongodb /> },
       { icon: <SiTailwindcss /> },
       { icon: <SiTypescript /> },
       { icon: <SiNextdotjs /> },
     ],
       links: [
        {icon:<FaGithub />, 
         link:'https://github.com/mannyIlupeju/rg-2',
        },
        {
         icon: <FaExternalLinkAlt/>,
         link:'https://url-shortener-iota-nine.vercel.app/',

        }
     ]
   },
   { 
    src: "/BlogApp.png", 
    alt: "memory blog app", 
    title: "Memory Blog App",  
    description: "Full Stack website where users can login and post and read blog posts",
    techStack1: [
    { icon: <SiMongodb /> },
    { icon: <SiTailwindcss />},
    {icon: <SiRedux />},
    {icon: <SiNextdotjs />},
    ],
    links: [
    {icon:<FaGithub />, 
     link:'https://github.com/mannyIlupeju/frontend',
    },
 
    ]
   },
 ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length); // Loop back to the first slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length); // Loop back to the last slide
  };


  function hoverImage(){
    setShowDescription((prevState) => !prevState)
  }

  function removeHoverImage(){
    setShowDescription(false)
  }


  return (
    <div className='translate-y-24 flex xl:flex-row translate-x-1/5 container xl:mx-0 mx-auto flex-col xl:gap-12 gap-12 mb-24 p-4 lg:w-full text-zinc-800 leading-8'>
      <div className='flex-col xl:w-1/2'>
        <h1 className='xl:text-8xl text-6xl'>Projects</h1>
        <div className='text-md my-4'>
          <p>
            These are projects i have taken on to build my competency with using
            tools and frameworks to solve business and personal problems. The
            projects have also given me a chance to develop my skills in
            resolving challenging bugs and issues. The languages i have used in
            building these projects are: Next JS, React, Redux, Typescript,
            MongoDB and leveraging the powers of Shopify and other tools.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-4 justify-center xl:w-2/5'>
        <span className="text-center font-bold">{projects[currentSlide].title}</span>
        <div
          className='bg-green-300 w-fit rounded-xl overflow-x-hidden relative flex flex-row p-2'
          onMouseEnter={hoverImage}
          onMouseLeave={removeHoverImage}
        >
          <Image
            src={projects[currentSlide].src}
            alt={projects[currentSlide].alt}
            width={700}
            height={700}
            objectFit='cover'
            className='transition-opacity duration-300 ease-in'
            style={{ opacity: showDescription ? 0.5 : 1 }}
          />

          {showDescription && (
            
            <div className='absolute inset-0 projectImageBackground flex flex-col gap-4 justify-center p-4 opacity-90 overflow-y-hidden'>
             <div className="flex flex-col items-center gap-3 animate-[slideUp_1s_ease-in-out_forwards]">
                <p className='text-zinc-800 xl:text-md text-sm font-semibold'>
                    {projects[currentSlide].title}
                </p>
                <div className="flex flex-row gap-4">
                    {projects[currentSlide].techStack1.map((element, key)=> (
                        <div key={key} >
                        <span>{element.icon}</span>
                        </div>
                    ))}
                </div>
                <p className="xl:w-1/2 text-sm w-full text-center">{projects[currentSlide].description}</p>
                <div className="mt-4 flex gap-2">
                  {projects[currentSlide].links.map((element, key)=>(
                    <div key={key}>
                     <span>
                        <a href={element.link} target='_blank'>
                        {element.icon} 
                        </a>
                    </span>  
                    </div>
                  ))}
                </div>
            </div>
            </div>
         
          )}
        </div>
        <div className=' flex gap-2 mt-4 justify-center'>
          <button onClick={prevSlide} className=''>
            <FaArrowLeftLong size="1rem"/>
          </button>
          <button onClick={nextSlide} className=''>
            <FaArrowRight size="1rem" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects