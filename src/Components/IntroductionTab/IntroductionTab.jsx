import React, { useState, useEffect } from 'react'
import { Inform } from './Inform'
import { motion } from 'framer-motion'
import './Introduction.css'
function IntroductionTab() {
  const [onHandle, setOnHandle] = useState('1')
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <>
      <div className="AllContentBackground" style={{ padding: windwosWidth > 500 ? '3rem 3rem' : '1rem 1rem' }}>
        {/* 上方按鈕 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {Inform.map((item) => {
            return (
              <button
                onClick={() => setOnHandle(item.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  alignItems: 'center',
                  backgroundColor: onHandle === item.id ? '#7AACA9 ' : '#fdfdfd',
                  color: onHandle === item.id ? '#fff' : '#7AACA9',
                  border: 0,
                  width: '30vh',
                  borderRadius: '10px 10px 0px 0px',
                  boxShadow: ' 0px 0px 1px rgba(0, 0, 0, 0.5)',
                }}
                key={item}
              >
                <div className="Tab" style={{ padding: '1rem 0', fontSize: windwosWidth < 1000 ? '1.2rem' : '1.5rem' }}>
                  <icon style={{ paddingRight: '5px', fontSize: '2rem' }}>{item.icon}</icon>
                  {item.Tabtitle}
                </div>
              </button>
            )
          })}
        </div>
        {/* 下方內容 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fdfdfd',
            fontColor: 'black',
            borderRadius: '0px 0px 1rem 1rem',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3vw 5vw',
            boxShadow: ' 0px 0px 1px rgba(0, 0, 0, 0.5)',
          }}
        >
          {Inform.filter((item) => item.id === onHandle)[0].content}
        </div>
      </div>
    </>
  )
}

export default IntroductionTab
