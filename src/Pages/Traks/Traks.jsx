import './Traks.css'
import React, { useEffect, useState, useRef } from 'react'
import { TraksTabInform } from '../../Components/TraksTab/TraksTabInform'
import Section from '../../Components/TraksTab/Section'
import TracksTab from '../../Components/TraksTab/TracksTab'
import SectionListTab from '../../Components/TraksTab/SectionListTab'
import { Grid, Box, Button } from '@mui/material'
import '../../Components/TraksTab/TraksTab.css'
import { useParams } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'
import { Waypoint } from 'react-waypoint'

function Traks({ navBarHeight }) {
  const { id } = useParams()
  const [onHandle, setOnHandle] = useState(id || '1') //Trackbutton
  const [Click, setClick] = useState('1') //section
  const inputRef = useRef(null)
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)
  const [tracksTabHeight, setTracksTabHeight] = useState(0)
  const [sectionListTabHeight, setSectionListTabHeight] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    setClick('1')
  }, [onHandle, id])

  useEffect(() => {
    setClick('1')
  }, [id])

  return (
    <div className={windwosWidth > 500 && 'AllBackground'}>
      <Box sx={{ background: '#fdfdfd', margin: 0, minHeight: '100vh' }}>
        <TracksTab
          setOnHandle={setOnHandle}
          onHandle={onHandle}
          navBarHeight={navBarHeight}
          setTracksTabHeight={setTracksTabHeight}
        />
        <Grid
          container
          sx={{
            justifyContent: 'space-around',
          }}
        >
          <SectionListTab
            onHandle={onHandle}
            Click={Click}
            setClick={setClick}
            windwosWidth={windwosWidth}
            tracksTabHeight={tracksTabHeight}
            navBarHeight={navBarHeight}
            setSectionListTabHeight={setSectionListTabHeight}
          />

          <Grid item xs={12} sm={8} md={8} lg={9}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{
                padding: windwosWidth <= 500 && '0 1rem',
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
                  <section key={sc.id}>
                    <div
                      id={sc.id}
                      style={{
                        position: 'relative',
                        top: -(navBarHeight + tracksTabHeight + sectionListTabHeight),
                      }}
                    ></div>
                    <Waypoint
                      bottomOffset={window.innerHeight - navBarHeight - tracksTabHeight - sectionListTabHeight}
                      onEnter={() => {
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
                    {sc.id === '1' && (
                      <Button
                        variant="outlined"
                        startIcon={<SendIcon />}
                        onClick={() => {
                          window.open(sc.profile, '_blank', 'noopener,noreferrer')
                        }}
                        style={{
                          marginLeft: '0.2rem',
                          marginBottom: '1rem',
                          color: '#000',
                          borderColor: '#000',
                          fontWeight: 'bold',
                        }}
                      >
                        展開簡報
                      </Button>
                    )}
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
