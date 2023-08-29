import React, { useState, useEffect, useRef } from 'react'
import { active } from './Inform'
import './Training.css'
function Training() {
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })
  return (
    <div className={windwosWidth > 500 && 'AllBackground'}>
      <div
        style={{
          background: '#fdfdfd',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2vw  0',
          }}
        >
          <h1
            style={{
              borderWidth: '2px',
              paddingTop: '1vw',
              fontWeight: 'bold',
              marginBottom: '2rem',
              padding: ' 1rem 5rem 1.5rem',
              borderBottom: 'solid 4px #fbc170',
            }}
          >
            教育訓練
          </h1>
        </div>

        {active.map((item) => {
          return (
            <div key={item} className="ActiveBlock">
              <h3
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginBottom: '2vw',
                }}
              >
                {item.title}
              </h3>
              <div className="Content" style={{ display: 'flex', width: '100%' }}>
                {item.content}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Training
