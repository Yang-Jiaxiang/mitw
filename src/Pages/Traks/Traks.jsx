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

function Traks() {
  const { id } = useParams()
  const [onHandle, setOnHandle] = useState(id || '1') //Trackbutton
  const [Click, setClick] = useState('1') //section

  const inputRef = useRef(null)
  const [topList, setTopList] = useState([])
  const [firstRender, setFirstRender] = useState(true)
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })
  useEffect(() => {
    setTopList([...topList, inputRef.current.offsetTop])
  }, [])

  useEffect(() => {
    setClick('1')
    setFirstRender(true)
  }, [onHandle, id])

  useEffect(() => {
    setClick('1')
    setFirstRender(true)
  }, [id])

  return (
    <div className={windwosWidth > 500 && 'AllBackground'}>
      <Box sx={{ background: '#fdfdfd', margin: 0, minHeight: '100vh' }}>
        <TracksTab setOnHandle={setOnHandle} onHandle={onHandle} setFirstRender={setFirstRender} />
        <Grid
          container
          sx={{
            justifyContent: 'space-around',
          }}
        >
          <SectionListTab onHandle={onHandle} Click={Click} setClick={setClick} setFirstRender={setFirstRender} />

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
              ref={inputRef}
            >
              {TraksTabInform.find((item) => item.Id === onHandle).List.map((sc) => {
                return (
                  <section
                    id={sc.id}
                    key={sc.id}
                    style={{ paddingTop: firstRender ? 0 : topList > 0 ? topList[0] - 5 : null, minHeight: '50vh' }}
                  >
                    <Waypoint
                      bottomOffset={(window.innerHeight / 4) * 3}
                      onEnter={({ previousPosition, currentPosition, waypointTop, viewportTop }) => {
                        setClick(sc.id)
                      }}
                    />

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

                    <div>{sc.content}</div>
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
