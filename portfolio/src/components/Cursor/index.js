import React, {useEffect, useState, useRef} from 'react'
import styles from './Cursor.module.css'

function Cursor() {
  const [position, setPosition] = useState({x:0, y:0})
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setlinkHovered] = useState(false)

  console.log(linkHovered)

  useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseenter', onMouseEnter)
        }

        const removeEventListeners=()=>{
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseenter', onMouseEnter)
        }

        const onMouseMove=(e)=>{
            setPosition({x:e.clientX, y:e.clientY});
        }

        const onMouseEnter = () => {
            console.log('entered')
            setHidden(true);
            setlinkHovered(true)

        }
        const onMouseLeave = () => setHidden(false);
        const onMouseDown = () => setClicked(true);
        const onMouseUp = () => setClicked(true);

        addEventListeners();
     return () => removeEventListeners()
  }, []);

 

  return (
    <div 
      className={`${styles.cursor}`}
      style={{ 
      left: `${position.x}px`, 
      top: `${position.y}px`,
      }}
    />
  )
}

export default Cursor