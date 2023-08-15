import './Traks.css'
import React, { useEffect, useState, useRef } from 'react'
import { TraksTabInform } from '../../Components/TraksTab/TraksTabInform'
import Section from '../../Components/TraksTab/Section'
import TracksTab from '../../Components/TraksTab/TracksTab'
import SectionListTab from '../../Components/TraksTab/SectionListTab'
import { Grid, Box } from '@mui/material'
import '../../Components/TraksTab/TraksTab.css'
import { useParams } from 'react-router-dom'
import { Waypoint } from 'react-waypoint'

import Tab from '../../Components/TraksTab/TraksTab'
function Traks() {
  const { id } = useParams()
  const [onHandle, setOnHandle] = useState(id || '1') //Trackbutton
  const [Click, setClick] = useState('1') //section

  useEffect(() => {
    setClick('1')
  }, [onHandle])
  return (
    <div className="AllBackground">
      <Box sx={{ background: '#fdfdfd', margin: 0, minHeight: '100vh' }}>
        <TracksTab setOnHandle={setOnHandle} onHandle={onHandle} />
        <Grid
          container
          sx={{
            justifyContent: 'space-around',
          }}
        >
          <SectionListTab onHandle={onHandle} Click={Click} setClick={setClick} />

          <Grid item xs={8} sm={8} md={8} lg={9}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{
                paddingBottom: '3rem ',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              {TraksTabInform.find((item) => item.Id === onHandle).List.map((sc) => {
                return (
                  <section id={sc.id} key={sc.id} style={{}}>
                    <Waypoint onEnter={() => setClick(sc.id)} />
                    <h2
                      className="TracksH1"
                      style={{
                        fontWeight: 'bold',
                        borderLeft: '4px orange solid',
                        paddingLeft: '1rem',
                        margin: '2rem 0',
                      }}
                    >
                      {sc.Sc}
                    </h2>
                    {sc.content}
                  </section>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Traks
