import React, { useEffect, useState, useRef } from 'react'
import { TraksTabInform } from './TraksTabInform'
import { Grid, Select, MenuItem, FormControl } from '@mui/material'
import { HashLink as Link } from 'react-router-hash-link' //section nagetive on same page
import { useNavigate } from 'react-router-dom'

function SectionListTab({
  Click,
  setClick,
  onHandle,
  windwosWidth,
  tracksTabHeight,
  navBarHeight,
  setSectionListTabHeight,
}) {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [topList, setTopList] = useState([])
  const selectionInputRef = useRef(null)

  useEffect(() => {
    setTopList([...topList, inputRef.current.offsetTop])
  }, [])

  useEffect(() => {
    setSectionListTabHeight(windwosWidth <= 600 ? selectionInputRef.current.clientHeight : 0)
  }, [windwosWidth])

  const smallStyle = {
    position: 'sticky',
    top: tracksTabHeight + navBarHeight,
    zIndex: 3000,
  }

  const bigStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'space-around',
    position: 'sticky',
    height: '100%',
    width: '100%',
    top: tracksTabHeight + navBarHeight + 20,
    paddingLeft: '1vh',
  }

  return (
    <Grid item xs={12} sm={2} md={2} lg={2} ref={inputRef} style={windwosWidth <= 600 ? smallStyle : bigStyle}>
      {windwosWidth <= 600 ? (
        <FormControl style={{ width: '100%', background: '#fff' }} ref={selectionInputRef}>
          <Select
            onChange={(e) => {
              setClick(e.target.value)
            }}
            value={Click}
            sx={{
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 0, width: '100%' },
              width: '100%',
            }}
          >
            {TraksTabInform.filter((item) => item.Id === onHandle)[0].List.map((sectiontab) => {
              return (
                <MenuItem value={sectiontab.id} key={sectiontab.id}>
                  <Link
                    to={`#${sectiontab.id}`}
                    style={{
                      border: 'none',
                      background: 'none',
                      width: '100%',
                      color: '#000',
                      textDecoration: 'none',
                    }}
                    onClick={() => setClick(sectiontab.id)}
                  >
                    {sectiontab.Sc}
                  </Link>
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      ) : (
        <>
          {TraksTabInform.filter((item) => item.Id === onHandle)[0].List.map((sectiontab) => {
            return (
              <Link
                to={`#${sectiontab.id}`}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: Click === sectiontab.id ? '1.1rem' : '1rem',
                  fontWeight: Click === sectiontab.id ? 'bold' : 'normal',
                  color: '#000',
                  textDecoration: 'none',
                  marginBottom: '5px',
                  width: '100%',
                }}
                key={sectiontab.id}
                onClick={() => {
                  setClick(sectiontab.id)
                }}
                smooth
              >
                {sectiontab.Sc}
              </Link>
            )
          })}
        </>
      )}
    </Grid>
  )
}

export default SectionListTab
