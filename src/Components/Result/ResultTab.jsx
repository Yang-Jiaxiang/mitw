import React, { useEffect, useState, useRef } from 'react'
import { ResultTabInform } from './Inform'
import { trackstable } from './Tables'
import ResultTable from '../Result/Table/ResultTable'
import { motion } from 'framer-motion'
import { Grid, duration, Box } from '@mui/material'
import './Result.css'
function ResultTab({ windwosWidth }) {
  const [track, setTrack] = useState(1)

  const inputRef = useRef(null)
  const [topList, setTopList] = useState([])
  useEffect(() => {
    setTopList([...topList, inputRef.current.offsetTop])
  }, [])

  return (
    <div style={{ background: '#fdfdfd' }}>
      <Grid
        container
        gap={1}
        alignItems="center"
        ref={inputRef}
        style={{
          padding: '2vh',
          justifyContent: 'center',
          position: 'sticky',
          background: '#fdfdfd',
          top: topList[0] > 0 ? topList[0] - 10 : null,
          zIndex: 500,
        }}
      >
        <Grid item xs={2} sm={2} md={2} lg={2} style={{ display: 'flex', justifyContent: 'center' }}>
          <h1
            style={{
              margin: 0,
              padding: 0,
              color: '#000',
            }}
          >
            Track
          </h1>
        </Grid>
        <Grid item xs={9} sm={9} md={9} lg={9}>
          <Grid container spacing={1} style={{ justifyContent: 'space-evenly' }}>
            {ResultTabInform.map((item, i) => {
              return (
                <>
                  <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                      key={i}
                      style={{
                        background: 'none',
                        border: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                      }}
                      onClick={() => setTrack(item.Id)}
                    >
                      {track === item.Id && (
                        <motion.div
                        // layoutId="active-pill"
                        // transition={{ duration: 0.6 }}
                        // style={{
                        //   background: track === item.Id ? ' rgba(0, 249, 255,0.75)' : 'none',

                        //   boxShadow:
                        //     track === item.Id
                        //       ? '0 1rem 1.25rem rgba(0, 249, 255,0.35),0 0.5rem 1.25rem #00F9FF, 0 0 1.25rem #00F9FF,0 0 1.25rem #53F3D3'
                        //       : '',
                        //   height: '3vw',
                        //   width: '3vw',
                        //   filter: 'blur(5px)',
                        //   borderRadius: '50%',
                        //   position: 'absolute',
                        // }}
                        />
                      )}
                      <p
                        style={{
                          fontSize: windwosWidth > 650 ? '2rem' : '1.2rem',
                          fontWeight: item.Id === track ? 'bold' : null,
                          color: item.Id === track ? '#000' : '#8b8b8b',
                          margin: 0,
                          position: 'relative',
                        }}
                      >
                        {item.TabTitle}
                      </p>
                    </button>
                  </Grid>
                </>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {/* 表格賽道標題 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '2rem',
          }}
        >
          <h1
            style={{
              margin: '5vh',
              color: '#000',
              marginBottom: '2vw',
            }}
          >
            {ResultTabInform.filter((item) => item.Id === track)[0].ContentTitle}
          </h1>

          {/* 表格 */}

          {trackstable[track].map((item, index) => (
            <center key={index} style={{ margin: '2rem 0' }} className="Tables">
              {item.table}
            </center>
          ))}
        </div>
      </Grid>
    </div>
  )
}

export default ResultTab
