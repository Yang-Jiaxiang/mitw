import React, { useRef, useState, useEffect } from 'react'
import { Inform } from './Inform'
import { Grid } from '@mui/material'
import './Signup.css'
function Signup() {
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          minHeight: '80vh',
          background: '#fdfdfd',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2vw 0 0',
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
            報名連結
          </h1>
        </div>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            margin: '3rem 0',
          }}
          gap={3}
        >
          {Inform.map((item) => {
            return (
              <Grid item sx={5} sm={5} md={5} lg={5} className="Block">
                {/* <div key={item} className="Block"> */}
                <img
                  src={item.icon}
                  style={{
                    color: '#3087a7',
                    width: '2.5rem',
                    filter: ' saturate(2)',
                    marginRight: '2rem',
                  }}
                />

                <a
                  href={!item.disable && item.link}
                  target="_blank"
                  className="SignupLink"
                  style={{
                    cursor: item.disable ? 'not-allowed' : 'pointer',
                  }}
                >
                  <h3
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignContent: 'center',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.title}
                    {item.disable && '（已截止）'}
                  </h3>
                </a>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default Signup
