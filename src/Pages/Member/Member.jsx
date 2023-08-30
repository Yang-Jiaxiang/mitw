import React, { useState, useEffect, useRef } from 'react'
import { CCard, CCardImage, CCardText, CCardTitle } from '@coreui/react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Box,
  Grid,
  Modal,
  List,
  ListItem,
  MenuItem,
  Select,
} from '@mui/material'
import { Mem } from '../Contributor/Inform'
import presetImage from '../../assets/preset.png'
import './Member.css'
import ClearIcon from '@mui/icons-material/Clear'
function Member() {
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)
  const [memId, setMemId] = useState(null)

  const [Open, setOpen] = useState(false)
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
  return (
    <>
      <div className={windwosWidth > 500 && 'AllBackground'}>
        <Grid
          container
          spacing={4}
          style={{
            padding: '1rem',
          }}
        >
          {Mem.filter(({ isMember }) => isMember).map((item, i) => {
            return (
              <Grid item xs={12} sm={10} md={6} lg={4} key={i}>
                <CCard
                  className="CardContainer"
                  style={{ width: '100%', border: 'none', minHeight: '50vh', paddingTop: '1rem' }}
                >
                  <p className="TracksTitle" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                    {item.Name.split('|')[0]}
                  </p>
                  <p className="Name">{item.Name.split('|')[1]}</p>
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
                      <h4 className="Bluetag"> {item.isPractice ? '實習督察員' : '督察員'}</h4>
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
                      <div
                        style={{
                          borderRadius: '50%',
                          background: '#aeafb0',
                          width: '2rem',
                          height: '2rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                          position: 'absolute',
                          top: '0.5rem',
                          right: '0.5rem',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          handleClose()
                        }}
                      >
                        <ClearIcon />
                      </div>
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
      </div>
    </>
  )
}

export default Member
