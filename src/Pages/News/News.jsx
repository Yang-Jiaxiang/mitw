import React from 'react'
import './News.css'
import Title from '../../assets/Title.png'
import p1Img from '../../assets/example.png'
import Traks from '../../Components/Traklist/Trakslist'
import NewsInform from './NewsInform.json'
import TTime from '../../assets/TTimeblack.png'
import yechen from '../../assets/yechen.jpg'

import { Grid, Box } from '@mui/material'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { newsData } from './Inform'

function News() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })
  return (
    <>
      <div className={windwosWidth > 600 && 'AllBackground'} style={{ color: '#000' }}>
        {/* -----------------首圖------------------ */}
        <Box className="AllContentBackground">
          <Grid container spacing={1} direction="column" alignContent="center" alignItems="center">
            {/* -----------------時程規劃--------------------- */}

            <Grid
              xs={12}
              sm={12}
              md={12}
              lg={12}
              item
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                marginBottom: '3vw',
                width: '80%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img src={TTime} alt="time" style={{ width: '100%' }} />
              </div>

              {/* 地圖 */}
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={12}
              lg={12}
              item
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                marginBottom: '3vw',
                width: '80%',
              }}
            >
              <div>
                <center>{/* <img src={yechen} alt="time" style={{ width: '80%' }} /> */}</center>
              </div>
            </Grid>

            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
                width: '100%',
                marginBottom: '2rem',
              }}
            >
              <Grid container direction="row" className="ContentBlock" width="100%">
                {newsData.map((item) => {
                  return (
                    <Grid
                      item
                      sx={12}
                      sm={12}
                      md={12}
                      lg={12}
                      style={{
                        padding: '1rem',
                        marginTop: '1rem',
                        background: '#f1f1f1',
                        width: '100%',
                      }}
                    >
                      <div
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          display: 'flex',
                          fontWeight: 'bold',
                          fontSize: windwosWidth > 1400 ? '1.5rem' : windwosWidth > 1000 ? '1.3rem' : '1.2rem',
                          marginBottom: '1rem',
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ textAlign: 'left' }}>{item.Content}</div>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>

            {/*----------- 意見小組 -----------*/}
            <Grid
              item
              xs={11}
              sm={11}
              md={11}
              lg={11}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '2rem 0 3vw',
                padding: 0,
                width: '100%',
              }}
            >
              <Grid
                container
                direction="row"
                className="ContentBlock"
                style={{
                  background: '#f1f1f1',
                  width: '100%',
                }}
              >
                <Grid
                  item
                  sx={8}
                  sm={4}
                  md={4}
                  lg={4}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                  }}
                >
                  <img src={p1Img} alt="p1img" style={{ objectFit: 'cover', width: '100%' }} />
                </Grid>
                {/* 右半文字 */}
                <Grid item sx={8} sm={8} md={8} lg={8} padding="2vw" width="100%">
                  <p
                    className="NewsH3"
                    style={{
                      marginBottom: '3rem',
                      textAlign: 'left',
                      justifyContent: 'left',
                      fontWeight: 'bold',
                      whiteSpace: 'pre',
                      paddingLeft: '1rem',
                    }}
                  >
                    {NewsInform.title.p1}
                  </p>
                  <ul style={{ margin: 0 }}>
                    <h4>
                      {NewsInform.p1.hash1}
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfPNL-NWe_EWJ7pfYY74hIQr8kuNRFEXYbeROu3Sem8Cq8Qlw/viewform"
                        style={{ color: '#3e78cf' }}
                        target="_blank"
                      >
                        表單
                      </a>
                    </h4>
                    <h4>{NewsInform.p1.hash2}</h4>
                    {NewsInform.p1.context.map((item) => {
                      return (
                        <li className="NewsContent" style={{ margin: '2rem 0', wordBreak: 'normal' }}>
                          {item}
                        </li>
                      )
                    })}
                  </ul>
                </Grid>
              </Grid>
            </Grid>

            {/* ----------------預計賽道------------------- */}
            <Grid item xs={10} sm={12} md={12} lg={12} sx={{ width: '80%' }}>
              <Traks />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default News
