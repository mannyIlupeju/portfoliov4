import {createContext, useContext, useEffect, useState} from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const ContextProvider = ({children}) => {
  const [hoveredState, setHoveredState] = useState({
    home: false,
    about:false,
    project:false,
    contact:false,
    linkedin: false,
    twitter: false,
    github: false,
    resume: false,
    title: false
  })

  const [hoveredEffect, setHoveredEffect] = useState('')

   const [position, setPosition] = useState({x:0, y:0})
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false)

 

  useEffect(() => {
        const onMouseMove=(e)=>{
            setPosition({x:e.clientX, y:e.clientY});
        }

        const onMouseEnter = () => {
            setLinkHovered(true)
        }

        const onMouseLeave = () => {
          setHidden(false);
          setLinkHovered(false);
        };

        const links = document.querySelectorAll('.links')
      
        links.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter)
            el.addEventListener('mouseleave', onMouseLeave)
        })
        
        
        document.addEventListener('mousemove', onMouseMove);
 
        return () => {
            links.forEach((el) => {
            el.removeEventListener('mouseenter', onMouseEnter);
            el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    
  }, []);


  return (
    <GlobalContext.Provider value={{
        hoveredState,
        setHoveredState,
        hoveredEffect,
        setHoveredEffect,
        position,
        setPosition,
        linkHovered
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default ContextProvider