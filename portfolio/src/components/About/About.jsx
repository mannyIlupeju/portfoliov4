import React, {useState} from 'react'

export default function About() {
  const [showSkills, setShowSkills] = useState(true)
  const [showExperience, setShowExperience] = useState(false)

  function handleSkills() {
    setShowSkills(true)
    setShowExperience(false)
  }

  function handleExperience(){
    setShowExperience(true)
    setShowSkills(false)
  }
  return (
    <div className="translate-y-10 xl:translate-y-24 flex xl:flex-row flex-col gap-24 xl:p-2 p-4 container mx-auto mb-24 text-zinc-800">
        <div className="flex flex-col xl:w-1/2 lg:w-2/3 w-full">
            <h1 className="xl:text-8xl text-5xl">About Me</h1>
            <div className="my-4 leading-8">
            <p>As a passionate software developer with a fervent commitment to building high-quality websites, applications, and business tools, I bring to the table a rich tapestry of technical skills and creative problem-solving abilities. My journey in the tech world is driven by a deep-seated belief in the transformative power of technology to enhance our daily lives and streamline business operations.</p>
            </div>
        </div>

        <div className="xl:translate-y-10 2xl:translate-x-42 translate-x-13 w-fit mb-12">
            <div className="flex md:gap-14 gap-4 w-full cursor-pointer">
                <span 
                className={showSkills ? 'font-bold' : 'font-light'}
                onClick={handleSkills}
                >
                Skills
                </span>
                <span 
                className={showExperience ? 'font-bold' : 'font-light'}
                onClick={handleExperience}
                >
                Experience
                </span>
            </div>

            {showSkills && 
                <div className="flex flex-col gap-7 xl:w-1/2 w-full mt-4">
                  <span>
                    Languages: HTML, CSS, Javascript, Typescript, Java
                  </span>
                  <span>
                    Frameworks & Libraries: React, Typescript, Next, NodeJS, Express, Spring
                  </span>
                  <span>
                    Database & Others: MongoDB, SQL
                  </span>

                </div>
            }

            {showExperience && 
                <div className="mt-4 flex flex-col gap-7">
                  <span>
                    Retrogold Ecommerce. <br></br>
                    Full-Stack Developer: 
                    Feb 2023 - Feb 2024
                  </span>
                  <span>
                    Hcue66.<br></br>
                    Full-Stack Developer:
                     November 2023 - Present
                  </span>
                </div>
            }
        </div>
    </div>
  )
}
 