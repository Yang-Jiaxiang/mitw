import React, { useRef, useState, useEffect } from 'react'
import { TraksTabInform } from './TraksTabInform'
import './TraksTab.css'
import { useParams } from 'react-router-dom'

import { Grid, Box } from '@mui/material'

function TracksTab({ setOnHandle, onHandle }) {
  const inputRef = useRef(null)
  const [topList, setTopList] = useState([])

  useEffect(() => {
    setTopList([...topList, inputRef.current.offsetTop])
  }, [])
  return (
    <div
      ref={inputRef}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        position: 'sticky',
        overflowX: 'scroll',
        padding: '0 2rem 0 2rem',
        background: '#fff',
        top: topList > 0 ? topList[0] - 5 : null,
      }}
    >
      {TraksTabInform.map((item) => {
        return (
          <button
            className="Tabsbutton"
            key={item}
            onClick={() => setOnHandle(item.Id)}
            style={{
              color: onHandle === item.Id ? '#000' : null,
              fontWeight: onHandle === item.Id ? 'bold' : 'normal',
              fontSize: onHandle === item.Id ? '2.5rem' : '2rem',
              minWidth: '5rem',
            }}
          >
            {item.TabTitle}
          </button>
        )
      })}
    </div>
  )
}

export default TracksTab
