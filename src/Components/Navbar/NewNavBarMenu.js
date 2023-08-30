import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Dropdown } from 'react-bootstrap'

const NewNavBarMenu = ({ page, windwosWidth }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [showDropdown, setShowDropdown] = useState(false)

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }

  function handleClose() {
    setAnchorEl(null)
  }
  function handleMenuMouseLeave() {
    setAnchorEl(null)
  }

  return (
    <Dropdown
      onMouseLeave={() => {
        setShowDropdown(false)
      }}
      onMouseOver={() => {
        setShowDropdown(true)
      }}
    >
      <Dropdown.Toggle
        style={{
          marginLeft: '1rem',
          padding: 0,
          paddingTop: 1,
          color: '#646363',
          background: '#fdfdfd',
          border: 'none',
          fontFamily: 'Noto Sans TC, sans-serif',
          fontSize: windwosWidth < 1700 ? (windwosWidth < 1400 ? '1rem' : '1.2rem') : '1.3rem',
        }}
      >
        {page.name}
      </Dropdown.Toggle>

      <Dropdown.Menu show={showDropdown}>
        {page.li.map((item) => (
          <MenuItem
            style={{
              color: '#646363',
              fontSize: windwosWidth < 1600 ? '1rem' : '1.2rem',
              fontFamily: 'Noto Sans TC, sans-serif',
            }}
            onClick={() => {
              if (item.lipath.includes('http')) {
                const newWindow = window.open(item.lipath, '_blank', 'noopener,noreferrer')
                if (newWindow) newWindow.opener = null
              }
              handleMenuMouseLeave()
              setShowDropdown(false)
            }}
          >
            {item.liname}
          </MenuItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default NewNavBarMenu
