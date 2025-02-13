import React from 'react'
import { Collapse, List, ListItemButton, Typography } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

const SmallNewNavBarMenu = ({ page, openID, setOpenID, onClick }) => {
  const open = openID === page.name

  const handleClick = () => {
    setOpenID(open ? null : page.name)
  }

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <Typography
          textAlign="center"
          sx={{
            color: '#646363',
            fontSize: '1.1rem',
            fontFamily: 'Noto Sans TC,sans-serif',
          }}
        >
          {page.name}
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {page.li.map((item) => {
            return (
              <ListItemButton sx={{ pl: 4 }} onClick={onClick}>
                <NavLink
                  to={item.lipath}
                  style={{
                    textDecoration: 'none',
                  }}
                  target={item.lipath.includes('http') && '_blank'}
                >
                  <Typography
                    sx={{
                      color: '#646363',
                      fontSize: '1.1rem',
                      fontFamily: 'Noto Sans TC,sans-serif',
                    }}
                  >
                    {item.liname}
                  </Typography>
                </NavLink>
              </ListItemButton>
            )
          })}
        </List>
      </Collapse>
    </>
  )
}

export default SmallNewNavBarMenu
