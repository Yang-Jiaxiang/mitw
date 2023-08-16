import React from 'react'
import './News.css'
import Title from '../../assets/Title.png'
import p1Img from '../../assets/example.png'
import Traks from '../../Components/Traklist/Trakslist'
import NewsInform from './NewsInform.json'
import TTime from '../../assets/TTimeblack.png'

import { Grid, Box } from '@mui/material'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

function News() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <>
      <div className="AllBackground" style={{ color: '#000' }}>
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

            {/*----------- 意見小組 -----------*/}
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
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
                    // padding: "0 2rem",
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
                      textAlign: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      whiteSpace: 'pre',
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
                        <li style={{ margin: '2rem 0', wordBreak: 'normal' }}>
                          <p>{item}</p>
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
