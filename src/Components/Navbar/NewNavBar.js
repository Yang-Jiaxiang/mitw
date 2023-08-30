import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
// import Button from '@mui/material/Button'
import ListItemButton from '@mui/material/ListItemButton'

import { Button } from 'react-bootstrap'

import Logo from '../../assets/Logo.png'
import { routerList } from '../RouterList'
import { NavLink } from 'react-router-dom'
import NewNavBarMenu from './NewNavBarMenu'
import SmallNewNavBarMenu from './SmallNewNavBarMenu'
import { List } from '@mui/material'

function ResponsiveAppBar({ setNavBarHeight }) {
  const ref = useRef(null)
  const location = useLocation()
  const [windwosWidth, setWindowsWidth] = useState(window.innerWidth)
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [openID, setOpenID] = useState('')
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  useEffect(() => {
    function handleResize() {
      setWindowsWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    setNavBarHeight(ref.current.clientHeight)
  }, [windwosWidth])

  return (
    <AppBar
      position={location.pathname === '/' ? 'fixed' : 'sticky'}
      sx={{
        backgroundColor: location.pathname === '/' ? 'rgb(255,255,255,0.9)' : '#fdfdfd',
        boxShadow: location.pathname === '/' ? 0.5 : 0,
        zIndex: 1000,
      }}
      component="nav"
      ref={ref}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={process.env.REACT_APP_APP_HOST}
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} alt="Logo" className="Logo" style={{ height: '3rem', width: 'auto' }} />
          </Typography>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ display: windwosWidth < 1200 ? 'flex' : 'none' }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: windwosWidth < 1200 ? 'block' : 'none',
                zIndex: 3000,
              }}
              PaperProps={{
                style: {
                  width: '15rem',
                },
              }}
            >
              <List>
                {routerList.map((page) => {
                  if (page.li) {
                    return (
                      <SmallNewNavBarMenu
                        page={page}
                        openID={openID}
                        setOpenID={setOpenID}
                        onClick={handleCloseNavMenu}
                      />
                    )
                  } else {
                    return (
                      <NavLink
                        to={page.path}
                        style={{
                          textDecoration: 'none',
                        }}
                      >
                        <ListItemButton key={page.name} onClick={handleCloseNavMenu}>
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
                        </ListItemButton>
                      </NavLink>
                    )
                  }
                })}
              </List>
            </Menu>
          </Box>

          <Box sx={{ display: windwosWidth < 1200 ? 'none' : 'flex' }}>
            {routerList.map((page) => {
              if (page.li) {
                return <NewNavBarMenu page={page} windwosWidth={windwosWidth} />
              } else {
                return (
                  <NavLink to={page.path}>
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      disableRipple
                      style={{
                        marginLeft: '1rem',
                        padding: 0,
                        border: 'none',
                        backgroundColor: 'transparent',
                        color: '#646363',
                        fontSize: windwosWidth < 1700 ? (windwosWidth < 1400 ? '1rem' : '1.2rem') : '1.3rem',
                        fontFamily: 'Noto Sans TC,sans-serif',
                        '&:hover': {
                          color: '#000',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  </NavLink>
                )
              }
            })}
          </Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ display: windwosWidth < 1200 ? 'felx' : 'none' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
