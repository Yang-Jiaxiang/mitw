import React, { useRef, useState, useEffect } from 'react'
import Tab from '../../Components/IntroductionTab/IntroductionTab'
function Introduction() {
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })
  return (
    <>
      <div
        className={windwosWidth > 500 && 'AllBackground'}
        style={{
          margin: 0,
          minHeight: '100%',
        }}
      >
        <Tab />
      </div>
    </>
  )
}

export default Introduction
