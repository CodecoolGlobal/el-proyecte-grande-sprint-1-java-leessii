import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'
import { NavLink, Link } from "react-router-dom";


function NavbarCom() {
  return (
    <AppBar position={'static'} elevation={3}>
      <Toolbar>

        <IconButton size={'large'} edge={'start'} color={'inherit'} aria-label={'logo'}>
          <PetsIcon/>
        </IconButton>
        <Typography variant={'h6'} component={'div'} sx={{flexGrow: 1}}>
          PIĐI
        </Typography>
        <Stack direction={'row'} spacing={2}>
          <NavLink to="/" activeClassName="active-link">
            <Button  style={{ color: 'white' }}>ABOUT</Button>
          </NavLink>
          <NavLink to="/login" activeClassName="active-link">
            <Button style={{ color: 'white' }}>LOGIN</Button>
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarCom