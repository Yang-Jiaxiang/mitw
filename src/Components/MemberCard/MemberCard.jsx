import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogContentText } from '@mui/material'
import { Tabs, Mem } from '../../Pages/Member/Inform'
import Card from './Card'
import { Box, Grid } from '@mui/material'
import { CCard, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import './MemberCard.css'
import MemberSlider from './MemberSlider'
function MemberCard() {
  // const { Id, Traks, Img, Members, Tollger } = props.item;
  const [clickTrackId, setclickTrackId] = useState(1)
  const [Tracksopen, setTracksopen] = useState('MemSec')
  const onToggle = () => {
    Tracksopen === 'MemSec' ? setTracksopen('MemSec_click') : setTracksopen('MemSec')
  }
  // vvvvvvv dialog use
  const [memId, setMemId] = useState(null)
  const [Open, setOpen] = useState(false)
  const [id, setId] = useState(null)

  const handleClickOpen = (ID) => {
    setMemId(ID)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {}, [clickTrackId])

  return (
    <>
      <Grid
        container
        className="AllContentbackground"
        style={{
          justifyContent: 'center',
          // margin: "2vw 5vw",

          padding: '5vh 10vh',
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
          md={2}
          lg={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: '2rem' }}>Track</p>
          {Tabs.map((item) => {
            return (
              <div>
                <button
                  style={{
                    background: 'none',
                    marginBottom: '1vw',
                    border: 'none',
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
                      margin: 0,
                      paddingLeft: '10px',
                      fontSize: clickTrackId === item.id ? '1.4rem' : '1.2rem',

                      fontWeight: clickTrackId === item.id ? 'bold' : 'normal',
                      borderLeft: clickTrackId === item.id ? '4px solid orange' : 'none',
                    }}
                  >
                    {item.title}
                    {item.name}
                  </p>
                </button>
              </div>
            )
          })}
        </Grid>

        {/* 卡片 */}
        <Grid item xs={12} sm={10} md={10} lg={10}>
          <Grid
            container
            gap={1}
            style={{
              // height: "100%",
              width: '100%',
              // flexWrap: "nowrap",
              justifyContent: 'space-evenly',
            }}
          >
            {Mem.filter(({ Track }) => Track === clickTrackId).map((item, i) => {
              return (
                <Grid item xs={10} sm={10} md={5} lg={5} key={i} sx={{ display: 'flex' }}>
                  <CCard className="CardContainer" style={{ width: '100%', border: 'none' }}>
                    <p className="Tracks"> {item.Track}</p>
                    <h2 className="TracksTitle">{item.TraksTitle}</h2>
                    <div style={{ height: '3.5rem' }}>
                      <h5 className="Name">{item.Name}</h5>
                    </div>
                    <CCardImage
                      style={{ width: '90%', cursor: 'pointer' }}
                      src={item.Img}
                      onClick={() => {
                        handleClickOpen(item.Id)
                      }}
                    />

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          flexDirection: 'row-reverse',
                        }}
                      >
                        <h4 className="Bluetag">{item.Position}</h4>
                      </span>
                    </div>
                  </CCard>
                  {Open === true && memId === item.Id ? (
                    <Dialog open={Open} onClose={handleClose}>
                      <DialogContent>
                        <DialogContentText>
                          <div style={{ width: '50vw' }}>{item.Tollger}</div>
                        </DialogContentText>
                      </DialogContent>
                    </Dialog>
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
