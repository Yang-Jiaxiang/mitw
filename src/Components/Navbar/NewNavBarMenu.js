import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

const NewNavBarMenu = ({ page, windwosWidth }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

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
    <NavLink>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        sx={{
          padding: windwosWidth < 1700 ? (windwosWidth < 1400 ? '0.25rem 0.25rem' : '0.5rem 0.5rem') : '0.5rem 1rem',
          color: '#646363',
          fontSize: windwosWidth < 1700 ? (windwosWidth < 1400 ? '1rem' : '1.2rem') : '1.5rem',
          fontFamily: 'Noto Sans TC, sans-serif',
          ':hover': {
            color: '#000',
            background: 'none',
          },
        }}
      >
        {page.name} {anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {page.li.map((item) => (
          <NavLink to={item.lipath} key={item.liname} style={{ textDecoration: 'none' }}>
            <MenuItem
              style={{
                color: '#646363',
                fontSize: windwosWidth < 1600 ? '1rem' : '1.2rem',
                fontFamily: 'Noto Sans TC, sans-serif',
              }}
              onClick={handleMenuMouseLeave}
            >
              {item.liname}
            </MenuItem>
          </NavLink>
        ))}
      </Menu>
    </NavLink>
  )
}

export default NewNavBarMenu
