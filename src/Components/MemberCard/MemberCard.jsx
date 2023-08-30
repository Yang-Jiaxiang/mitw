import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  FormControl,
  List,
  ListItem,
  MenuItem,
  Modal,
  Select,
} from '@mui/material'
import { Tabs, Mem } from '../../Pages/Contributor/Inform'
import Card from './Card'
import { Box, Grid } from '@mui/material'
import { CCard, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import './MemberCard.css'
import MemberSlider from './MemberSlider'
import presetImage from '../../assets/preset.png'

function MemberCard() {
  const [clickTrackId, setclickTrackId] = useState(1)
  const [Tracksopen, setTracksopen] = useState('MemSec')
  const onToggle = () => {
    Tracksopen === 'MemSec' ? setTracksopen('MemSec_click') : setTracksopen('MemSec')
  }
  const [memId, setMemId] = useState(null)
  const [Open, setOpen] = useState(false)
  const [id, setId] = useState(null)

  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  const handleClickOpen = (ID) => {
    setMemId(ID)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {}, [clickTrackId])

  const TrackList = () => {
    return (
      <List sx={{ paddingTop: '1rem' }}>
        {Tabs.map((item) => {
          return (
            <ListItem
              style={{
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: '0 0 0 1em',
              }}
              onClick={() => {
                setclickTrackId(item.id)
              }}
            >
              <p
                key={item.id}
                className={Tracksopen}
                onClick={() => {
                  onToggle()
                }}
                style={{
                  fontSize: windwosWidth > 1200 ? '1.1rem' : '0.9rem',
                  fontWeight: clickTrackId === item.id ? 'bold' : 'normal',
                  borderLeft: clickTrackId === item.id ? '4px solid orange' : 'none',
                  paddingLeft: '0.5rem',
                }}
              >
                {item.title}
                {item.name}
              </p>
            </ListItem>
          )
        })}
      </List>
    )
  }

  const SmallList = () => {
    return (
      <FormControl style={{ marginLeft: '1rem', width: '12rem' }}>
        <Select
          onChange={(e) => setclickTrackId(e.target.value)}
          value={clickTrackId}
          sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        >
          {Tabs.map((item) => {
            return (
              <MenuItem value={item.id}>
                {item.id}-{item.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    )
  }

  return (
    <>
      <Grid
        container
        className="AllContentbackground"
        style={{
          justifyContent: 'center',
          padding: '5vh 2rem',
          background: '#fff',
          minHeight: '80vh',
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} height="10vh" sx={{}}>
          <h2>賽道工作小組</h2>
          <hr style={{ margin: '2vh 0 ' }} />
        </Grid>
        {/* 選單 */}
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p style={{ fontSize: '2rem' }}>
            Tracks
            {windwosWidth > 960 ? (
              <TrackList />
            ) : (
              <>
                -
                <SmallList />
              </>
            )}
          </p>
        </Grid>

        {/* 卡片 */}
        <Grid item xs={12} sm={10} md={9} lg={9}>
          <Grid
            container
            spacing={2}
            style={{
              width: '100%',
              justifyContent: 'space-evenly',
            }}
          >
            {Mem.filter(({ Track }) => Track.includes(clickTrackId))
              .filter(({ isContributor }) => isContributor)
              .map((item, i) => {
                const inTrackUserLength = Mem.filter(({ Track }) => Track.includes(clickTrackId)).length
                return (
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    md={6}
                    lg={inTrackUserLength <= 2 ? 5 : 4}
                    key={i}
                    sx={{ display: 'flex' }}
                  >
                    <CCard className="CardContainer" style={{ width: '100%', border: 'none', minHeight: '50vh' }}>
                      <p className="Tracks"> {clickTrackId}</p>
                      <p className="TracksTitle">{Tabs.find((item) => item.id === clickTrackId).name}</p>
                      <p className="Name">{item.Name}</p>
                      <CCardImage
                        style={{ width: '85%', cursor: 'pointer' }}
                        src={item.Img || presetImage}
                        onClick={() => {
                          handleClickOpen(item.Id)
                        }}
                      />
                      <div
                        style={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <span
                          style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            marginTop: '1rem',
                          }}
                        >
                          <h4 className="Bluetag">{item.Position}</h4>
                        </span>
                      </div>
                    </CCard>
                    {Open === true && memId === item.Id ? (
                      <Modal open={Open} onClose={handleClose}>
                        <div
                          style={{
                            background: '#fff',
                            position: 'absolute',
                            padding: '1rem',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: windwosWidth < 800 ? '90vw' : '60vw',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            borderRadius: '0.5rem',
                          }}
                        >
                          {item.Tollger}
                        </div>
                      </Modal>
                    ) : (
                      ''
                    )}
                  </Grid>
                )
              })}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default MemberCard
