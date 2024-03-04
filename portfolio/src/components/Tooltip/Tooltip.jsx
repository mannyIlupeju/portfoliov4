
import React, {useState} from 'react'

function Tooltip({children, text}) {
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <div
     className="relative flex items-center gap-8"
      onMouseEnter={()=> setShowTooltip(true)}
      onMouseLeave={()=> setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute xl:right-16 xl:top-0 xl:ml-24 -top-10 -right-4 px-2 py-1 bg-black text-white text-xs rounded cursor-pointer">
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip