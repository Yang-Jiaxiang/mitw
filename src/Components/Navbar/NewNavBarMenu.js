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
        id="dropdown-basic"
        style={{
          margin: 2,
          padding: windwosWidth < 1700 ? (windwosWidth < 1400 ? '0.25rem 0.25rem' : '0.5rem 0.5rem') : '0.5rem 1rem',
          transform: 'translate(0, 50%)',
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
          <NavLink to={item.lipath} key={item.liname} style={{ textDecoration: 'none' }}>
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
          </NavLink>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default NewNavBarMenu
