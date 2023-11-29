import React from 'react'
import { HospitalInform } from '../../../Pages/Successcase/Inform'
import { Box, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import SeeMore from '../../Function/SeeMore'
import '../Successcase.css'
function Hospital() {
  return (
    <>
      {/* -------醫院應用--------- */}
      {HospitalInform.map((item, i) => {
        return (
          // -------左右---------
          <motion.div key={i} style={{ marginBottom: '2vw', paddingBottom: '2vw', borderBottom: '1px solid #dfdfdf' }}>
            <Grid container spacing={1} key={i} sx={{ marginTop: '1rem' }}>
              {/* 左 */}
              <Grid item sm={12} md={4} lg={4}>
                <Box>{item.img}</Box>
                <Box
                  style={{
                    marginBottom: '1rem',
                  }}
                >
                  <a
                    href={item.link}
                    target="_blank"
                    style={{
                      textDecoration: 'none ',
                      color: '#0081a7',
                      width: '100%',
                      marginRight: '3rem',
                    }}
                  >
                    {item.linkname}
                  </a>
                </Box>
                {item.tracks.map((tracks) => {
                  return (
                    <li style={{ display: 'flex' }}>
                      <div>{tracks.title}</div>-<div>{tracks.name}</div>
                    </li>
                  )
                })}
              </Grid>
              {/* 右 */}
              <Grid item sm={12} md={8} lg={8}>
                <Grid container spacing={1} direction="column">
                  <Grid item>
                    <h3>{item.name}</h3>
                  </Grid>
                  <Grid item style={{ whiteSpace: 'pre-line' }}>
                    <p>
                      {/* <SeeMore introduce={item.introduce} /> */}
                      {item.introduce}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        )
      })}
    </>
  )
}

export default Hospital
