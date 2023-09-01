import React from 'react'
import { IndustryInform } from '../../../Pages/Successcase/Inform'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import '../Successcase.css'

import SeeMore from '../../Function/SeeMore'
function Industry() {
  return (
    <>
      {/* --------產業產品-------- */}
      {IndustryInform.map((item, i) => {
        return (
          <motion.div
            key={i}
            style={{
              marginBottom: '2vw',
              paddingBottom: '2vw',
              borderBottom: '1px solid #dfdfdf',
            }}
          >
            <Grid container spacing={1} key={i} sx={{ marginTop: '1rem' }}>
              {/* 左 */}
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Grid container spacing={1} direction="column" alignItems="flex-start">
                  <Grid item>
                    <img
                      src={item.img}
                      className="IndusImg"
                      style={{
                        objectFit: 'cover',
                        marginBottom: '1rem',
                      }}
                    />
                  </Grid>

                  <Grid item>
                    {item.linkName.map((link) => {
                      return (
                        <a
                          key={link}
                          href={link.l}
                          target="_blank"
                          style={{
                            textDecoration: 'none ',
                            color: '#0081a7',
                            width: '100%',
                            marginRight: '3rem',
                          }}
                        >
                          {link.lname}
                        </a>
                      )
                    })}
                  </Grid>
                  <Grid item>
                    {item.tracks.map((tracks) => {
                      return (
                        <li style={{ display: 'flex' }}>
                          <div>{tracks.title}</div>-<div>{tracks.name}</div>
                        </li>
                      )
                    })}
                  </Grid>
                </Grid>
              </Grid>
              {/* 右 */}

              <Grid item xs={12} sm={12} md={8} lg={8}>
                <Grid container spacing={1} direction="column">
                  <Grid item>
                    <h3>{item.name}</h3>
                  </Grid>
                  <Grid item>
                    <p style={{ whiteSpace: 'pre-line' }}>
                      {/* <SeeMore introduce=/> */}
                      {item.introduce}{' '}
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

export default Industry
