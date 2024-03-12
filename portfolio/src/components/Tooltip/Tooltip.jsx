
import React, {useState} from 'react'

function Tooltip({children, text, className}) {
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <div
     className="relative flex items-center gap-8"
      onMouseEnter={()=> setShowTooltip(true)}
      onMouseLeave={()=> setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className={className}>
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip