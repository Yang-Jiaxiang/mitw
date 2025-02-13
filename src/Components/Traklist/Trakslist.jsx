import React, { useState } from 'react'
import { TraksInform } from './TraksInform.js'
import { Grid, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Trakslist() {
  const [isHover, setIsHover] = useState('')

  return (
    <>
      <div
        style={{
          color: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2vh 0 15vh',
        }}
      >
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5rem 0',
          }}
        >
          賽道(Track)
        </h2>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}
        >
          <Grid container spacing={1} gap={1} justifyContent="space-between">
            {TraksInform.map((item, i) => {
              return (
                <Grid
                  item
                  xs={4}
                  md={4}
                  lg={2.25}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  marginBottom="1.5vh"
                >
                  <div
                    key={i}
                    onMouseEnter={() => setIsHover(item.id)}
                    onMouseLeave={() => setIsHover('')}
                    style={{
                      textShadow:
                        isHover === item.id
                          ? item.onhover
                          : '0 0 0.5rem #b7feff, 0 0 0.5rem #b7feff,0 0 0.8rem #b7feff',
                    }}
                  >
                    <Link to={`/Tracks/${item.id}#1`} style={{ color: '#191c23', textDecoration: 'none' }}>
                      <h3
                        className="Newh3"
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '1vh',
                          maxWidth: '100%',
                          whiteSpace: 'nowrap', //不換行
                        }}
                      >
                        {item.title}
                      </h3>
                      <h5
                        className="Newh5"
                        style={{
                          maxWidth: '100%',
                          whiteSpace: 'pre', //遇到<br>或者換行符號(\n)才換行
                        }}
                      >
                        {item.context}
                      </h5>
                    </Link>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </div>
      {/* </div> */}
    </>
  )
}

export default Trakslist
