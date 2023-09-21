import React from 'react'
import {AppBar, Toolbar, IconButton, Typography, Stack} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'


function NavbarCom({customButtons}) {
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
          {customButtons.map((button) => (
              button
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarCom