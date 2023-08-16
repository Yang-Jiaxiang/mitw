import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import './Footer.css'
import { FooterContext, Connection } from './Inform'
function Footer() {
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{
          background: '#000',
          padding: '1rem',
        }}
      >
        {/* 左 */}
        <Grid
          item
          sm={6}
          md={6}
          lg={6}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {FooterContext.map((item) => {
            return (
              <Grid container alignItems="baseline" justifyContent="flex-start">
                <Grid
                  item
                  sm={4}
                  md={4}
                  lg={4}
                  className="LeftBlock"
                  style={{
                    paddingLeft: '2vh',
                    justifyContent: ' space-between',
                  }}
                >
                  <p key={item} style={{ color: '#fff', fontSize: '1rem', textAlign: 'right' }}>
                    {item.title}
                  </p>
                </Grid>
                <Grid
                  item
                  sm={8}
                  md={8}
                  lg={8}
                  style={{
                    display: 'flex',
                    margin: '1vh 0',
                  }}
                >
                  <ul
                    style={{
                      fontSize: '1rem',
                      margin: 0,
                      padding: '0 0 0 1vw ',
                      flexDirection: 'column',
                    }}
                  >
                    {item.data.map((item) => {
                      return (
                        <li
                          key={item}
                          style={{
                            listStyle: 'none',
                            marginBottom: '0.3rem',
                            fontSize: '1rem',
                          }}
                        >
                          <Link
                            to={item.path}
                            target="_blank"
                            style={{
                              color: '#fff',
                              maxWidth: '100%',
                              whiteSpace: 'nowrap',
                              fontSize: '1rem',
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </Grid>
              </Grid>
            )
          })}
        </Grid>

        {/* 右 */}
        <Grid item sm={6} md={6} lg={6} style={{ paddingLeft: '2vh' }}>
          <p
            style={{
              color: '#fff',
              display: 'flex',
              margin: '0 0 0.5rem',
              justifyContent: 'start',
              fontSize: '1.1rem',
            }}
          >
            聯絡我們
          </p>
          {Connection.map((item) => {
            return (
              <p
                key={item}
                style={{
                  color: '#fff',
                  marginBottom: '0.3rem',
                  wordWrap: 'break-word', //空格換行
                  fontSize: '1rem',
                }}
              >
                {item.title}
                {item.context}
              </p>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
