import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import ListItemButton from '@mui/material/ListItemButton'

import Logo from '../../assets/Logo.png'
import { routerList } from '../RouterList'
import { NavLink } from 'react-router-dom'
import NewNavBarMenu from './NewNavBarMenu'
import SmallNewNavBarMenu from './SmallNewNavBarMenu'
import { List } from '@mui/material'

function ResponsiveAppBar() {
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

  return (
    <AppBar position="sticky" sx={{ background: '#fdfdfd', boxShadow: 0 }} component="nav">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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

          <Box sx={{ display: windwosWidth < 1200 ? 'felx' : 'none' }}>
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

          <Box sx={{ display: windwosWidth < 1200 ? 'none' : 'felx' }}>
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
                      sx={{
                        margin: windwosWidth < 1600 ? '0 0.3 rem' : '0 0.6 rem', // 調整margin
                        my: 2,
                        padding: windwosWidth < 1600 ? null : '0.5rem 1rem', // 調整padding
                        color: '#646363',
                        fontSize: windwosWidth < 1600 ? '1.2rem' : '1.5rem',
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
