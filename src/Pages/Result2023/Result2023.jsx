import React, { useState, useEffect, useRef } from 'react'
import ResultTab from '../../Components/Result2023/ResultTab'
import Table from '../../Components/Result/Table/ResultTable'
function Result2023() {
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div
      className={windwosWidth > 500 && 'AllBackground'}
      style={{
        padding: windwosWidth <= 500 && '1rem',
      }}
    >
      <ResultTab windwosWidth={windwosWidth} />
    </div>
  )
}

export default Result2023
