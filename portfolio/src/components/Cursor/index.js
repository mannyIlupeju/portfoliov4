import React, {useEffect, useState, useRef} from 'react'
import styles from './Cursor.module.css'
import { useGlobalContext } from '@/context/Context'

function Cursor() {

  const {position, setPosition, linkHovered, hidden, clicked} = useGlobalContext()


  return (
    <div 
      className={`${styles.cursor} ${linkHovered ? styles.hovered : ''} ${hidden ? styles.hidden : ''} ${clicked ? styles.clicked : ''}` }
      style={{ 
      left: `${position.x}px`, 
      top: `${position.y}px`,
      }}
     
    />
  )
}

export default Cursor