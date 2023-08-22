import React, { useState, useEffect, useRef } from 'react'
import MemberCard from '../../Components/MemberCard/MemberCard'
import './Contributor.css'
function Contributor() {
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

export default Contributor
