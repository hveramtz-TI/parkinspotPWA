import React, { useState } from 'react'
import './header.css'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerOpen(open)
  }

  const scrollToSection = (id) => () => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setDrawerOpen(false)
  }

  return (
    <div className="header">
      <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        <List 
          sx={{ 
            width: {
              xs: 200, // small screens
              sm: 250, // small-medium screens
              md: 300, // medium screens
              lg: 350, // large screens
              xl: 400  // extra-large screens
            },
            paddingTop: 5 
          }} 
          role="presentation" 
          onClick={toggleDrawer(false)} 
          onKeyDown={toggleDrawer(false)}
        >
          <ListItem button onClick={scrollToSection('section1')}>
            <ListItemText sx={{textAlign:'center'}} primary='Sección 1' />
          </ListItem>
          <ListItem button onClick={scrollToSection('section2')}>
            <ListItemText sx={{textAlign:'center'}} primary='Sección 2' />
          </ListItem>
          <ListItem button onClick={scrollToSection('section3')}>
            <ListItemText sx={{textAlign:'center'}} primary='Sección 3' />
          </ListItem>
        </List>
      </Drawer>
      <h2>
        CONPARK
      </h2>
    </div>
  )
}