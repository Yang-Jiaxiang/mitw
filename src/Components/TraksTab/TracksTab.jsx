import React, { useRef, useState, useEffect } from 'react'
import { TraksTabInform } from './TraksTabInform'
import './TraksTab.css'
import { NavLink, useParams } from 'react-router-dom'

import { Grid, Box } from '@mui/material'

function TracksTab({ setOnHandle, onHandle, windwosWidth, navBarHeight, setTracksTabHeight }) {
  const inputRef = useRef(null)
  useEffect(() => {
    setTracksTabHeight(inputRef.current.clientHeight)
  }, [navBarHeight])

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
        top: navBarHeight - 5,
        zIndex: 999,
      }}
    >
      {TraksTabInform.map((item) => {
        return (
          <NavLink to={`../Tracks/${item.Id}`}>
            <button
              className="Tabsbutton"
              key={item}
              onClick={() => {
                setOnHandle(item.Id)
              }}
              style={{
                color: onHandle === item.Id ? '#000' : null,
                fontWeight: onHandle === item.Id ? 'bold' : 'normal',
                fontSize: onHandle === item.Id ? '2.5rem' : '2rem',
                minWidth: '5rem',
              }}
            >
              {item.TabTitle}
            </button>
          </NavLink>
        )
      })}
    </div>
  )
}

export default TracksTab
