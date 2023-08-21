import React, { useState, useEffect, useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link' //section nagetive on same page

import { P1, ListTitle, List } from './SpecificationInform'
import './Specification.css'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { Waypoint } from 'react-waypoint'
function Specification() {
  const [onHandle, setOnHandle] = useState('1')
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)

  const inputRef = useRef(null)
  const [topList, setTopList] = useState([])

  useEffect(() => {
    setTopList([...topList, inputRef.current.offsetTop])
  }, [])

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })
  return (
    <>
      <div className={windwosWidth > 500 && 'AllBackground'}>
        <div className="AllContentBackground" style={{ padding: '2vw 5vw' }}>
          {/* 公開意見徵求 */}
          <motion.div
            ref={inputRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              position: 'relative',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h4 style={{ marginBottom: '2rem' }}> {P1.title}</h4>
            <p>{P1.context}</p>
            <a href={P1.link} target="_blank" style={{ color: '#000' }}>
              {P1.linkTitle}
            </a>
            <hr style={{ width: '100%' }} />
          </motion.div>

          {/* 說明 */}

          <Grid container sx={{ margin: 0 }}>
            <Grid
              item
              xs={3}
              sm={2}
              md={2}
              lg={1.5}
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              {/* 選單 */}
              <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.8 }}>
                <div style={{ position: 'sticky', top: '5.5rem' }}>
                  {ListTitle.map((item) => {
                    return (
                      <Link
                        to={`#${item.id}`}
                        onClick={() => {
                          setOnHandle(item.id)
                        }}
                        key={item.id}
                        style={{
                          margin: 0,
                          backgroundColor: 'Transparent',
                          backgroundRepeat: 'no-repeat',
                          border: 'none',
                          overflow: 'hidden',
                          fontSize: onHandle === item.id ? '1.25rem' : '1rem',
                          color: onHandle === item.id ? '#000' : '#949494',
                          width: '100%',
                        }}
                        smooth
                      >
                        <div style={{ marginBottom: '5px', width: '100%' }}>{item.title}</div>
                      </Link>
                    )
                  })}
                </div>
              </motion.div>
            </Grid>
            {/* 說明內容 */}
            <Grid item xs={9} sm={10} md={10} lg={10.5} padding="0 2vh">
              {List.map((item) => {
                return (
                  <section
                    key={item.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div
                      id={item.id}
                      style={{
                        position: 'relative',
                        top: -topList[0],
                      }}
                    ></div>
                    <Waypoint onEnter={() => setOnHandle(item.id)} bottomOffset={window.innerHeight - topList[0]} />
                    <motion.h2
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.2 }}
                      className="SpecificationH5"
                      style={{
                        margin: '1rem 0',
                        padding: '0 1rem  ',
                        borderLeft: '4px solid orange',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.title}
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {item.content}
                    </motion.div>
                  </section>
                )
              })}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Specification
