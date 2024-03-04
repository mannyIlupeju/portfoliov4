import React from 'react'

function index() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

  return (
      <footer className="flex justify-end p-2">
     <span className="text-sm">{`© ${currentYear} Manny Ilupeju Portfolio.`}</span>
    </footer>
  )
}

export default index