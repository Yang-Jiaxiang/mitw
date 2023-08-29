import React, { useEffect, useState, useRef } from 'react'
import { ListTitle, List } from './Inform'
import './Successcase.css'
import { Box, Grid } from '@mui/material'
import { motion } from 'framer-motion'

function Successcase() {
  const inputRef = useRef(null)

  const [onHandle, setOnHandle] = useState('1')
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)
  const [topList, setTopList] = useState([])
  useEffect(() => {
    setTopList([...topList, inputRef.current.offsetTop])
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [onHandle])

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
        padding: windwosWidth <= 500 && '0rem 1rem',
      }}
    >
      {/*格局 左|上下*/}

      {windwosWidth < 900 && (
        <div
          style={{
            position: 'sticky',
            top: topList > 0 ? topList[0] - 35 : null,
            background: '#fdfdfd',
            height: '40px',
            zIndex: 998,
          }}
        >
          <Box
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              padding: '0.5rem 1rem 1rem 1rem',
              height: '40px',
            }}
          >
            {ListTitle.map((item) => {
              return (
                <p
                  onClick={() => setOnHandle(item.id)}
                  style={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: windwosWidth < 700 ? (windwosWidth < 500 ? '0.6rem' : '0.6rem') : '1rem',
                  }}
                >
                  {item.title}
                </p>
              )
            })}
          </Box>
        </div>
      )}

      <Grid
        container
        spacing={1}
        ref={inputRef}
        style={{
          justifyContent: 'space-around',
          minHeight: '100vh',
        }}
        className="AllContentBackground"
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          lg={1.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {windwosWidth > 900 && (
            <motion.div
              // initial={{ x: -200 }}
              // animate={{ x: 0 }}
              // transition={{ duration: 0.8 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  position: 'sticky',
                  top: topList[0] + 10,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                {ListTitle.map((item, i) => {
                  return (
                    <>
                      <button
                        onClick={() => setOnHandle(item.id)}
                        className="SuccessSectionTab"
                        style={{
                          backgroundColor: 'Transparent',
                          backgroundRepeat: 'no-repeat',
                          border: 'none',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          fontSize: '1.1rem',
                          margin: 0,
                          color: onHandle === item.id ? '#000' : '#949494',
                          marginBottom: '0.5rem',
                          padding: 0,
                        }}
                        key={i}
                      >
                        {item.title}
                      </button>
                    </>
                  )
                })}
              </div>
            </motion.div>
          )}
          {/* 選單 */}
        </Grid>
        {/* 上--目前案例 */}
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Grid container spacing={1} direction="column">
            <Grid
              item
              style={{
                borderLeft: '5px solid orange',
                paddingLeft: '1rem',
                alignItems: 'flex-end',
              }}
            >
              <h2 style={{ fontWeight: 'bold' }}>{List.filter((item) => onHandle === item.id)[0].title}</h2>
            </Grid>
            {/*下--案例們 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '0 2vh',
              }}
            >
              {List.filter((item) => onHandle === item.id)[0].cases}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Successcase
