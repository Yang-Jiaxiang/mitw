import React, { useState, useEffect, useRef } from 'react'
import MemberCard from '../../Components/MemberCard/MemberCard'
import './Member.css'
function Member() {
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <>
      <div className={windwosWidth > 500 && 'AllBackground'}>
        <MemberCard />
      </div>
    </>
  )
}

export default Member
