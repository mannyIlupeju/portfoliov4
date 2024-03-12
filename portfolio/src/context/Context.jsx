import {createContext, useState} from 'react'

const GlobalContext = createContext()


function Context() {
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




  return (
    <GlobalContext.provider value={{
        hoveredState,
        setHoveredState
    }}>
        {children}
    </GlobalContext.provider>
  )
}

export default Context