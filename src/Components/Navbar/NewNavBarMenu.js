import React, { useState } from 'react'
import { Menu, MenuItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Button, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NewNavBarMenu = ({ page, windwosWidth }) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <Dropdown
        onMouseLeave={() => {
          setShowDropdown(false)
        }}
        onMouseOver={() => {
          setShowDropdown(true)
        }}
        show={showDropdown}
        style={{
          marginLeft: '1rem',
        }}
      >
        <Dropdown.Toggle
          className="main-style"
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            height: '3rem',
            paddingTop: -1,
            color: '#646363',
            backgroundColor: 'transparent',
            border: 'none',
            fontFamily: 'Noto Sans TC, sans-serif',
            fontSize: windwosWidth < 1700 ? (windwosWidth < 1400 ? '1rem' : '1.2rem') : '1.3rem',
          }}
        >
          {page.name}
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            marginTop: '-0.1rem',
          }}
        >
          {page.li.map((item) => (
            <NavLink
              target={item.lipath.includes('http') ? '_blank' : '_parent'}
              to={item.lipath}
              style={{
                textDecoration: 'none',
                color: '#646363',
                fontSize: windwosWidth < 1600 ? '1rem' : '1.2rem',
                fontFamily: 'Noto Sans TC, sans-serif',
              }}
            >
              <MenuItem
                style={{
                  color: '#646363',
                  fontSize: windwosWidth < 1600 ? '1rem' : '1.2rem',
                  fontFamily: 'Noto Sans TC, sans-serif',
                  width: '100%',
                }}
                onClick={() => {
                  setShowDropdown(false)
                }}
              >
                {item.liname}
              </MenuItem>
            </NavLink>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
{
  /*  */
}
export default NewNavBarMenu
