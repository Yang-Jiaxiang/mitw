import React, { useRef } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

const NewNavBarMenu = ({ page, windwosWidth }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleMouseOver = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <NavLink>
            <Button
                onMouseOver={handleMouseOver}
                sx={{
                    margin: windwosWidth < 1600 ? '0 0.3 rem' : '0 0.6 rem', // 調整margin
                    my: 2,
                    padding: windwosWidth < 1600 ? null : '0.5rem 1rem', // 調整padding
                    color: '#646363',
                    fontSize: windwosWidth < 1600 ? '1.2rem' : '1.5rem',
                    fontFamily: 'Noto Sans TC,sans-serif',
                    ':hover': {
                        color: '#000',
                        background: 'none',
                    },
                }}
            >
                {page.name} {anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {page.li.map((item, index) => {
                    return (
                        <NavLink
                            to={item.lipath}
                            key={item.liname}
                            style={{
                                textDecoration: 'none',
                            }}
                        >
                            <MenuItem
                                style={{
                                    color: '#646363',
                                    fontSize: windwosWidth < 1600 ? '1rem' : '1.2rem',
                                    fontFamily: 'Noto Sans TC,sans-serif',
                                    ':hover': { color: '#000' },
                                }}
                                onClick={handleClose}
                            >
                                {item.liname}
                            </MenuItem>
                        </NavLink>
                    )
                })}
            </Menu>
        </NavLink>
    )
}

export default NewNavBarMenu
