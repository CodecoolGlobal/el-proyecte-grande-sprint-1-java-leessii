import * as React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function AnimalCardCom({animal}) {
  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia
        sx={{height: 140}}
        image="https://media.wired.com/photos/636eb5510ae5a121565fd729/master/w_2560%2Cc_limit/WI110122_FF_ForeverDogs_2400x1350_crop.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {animal.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <List aria-label="species">
            <ListItem>
              Species: {animal.species}
            </ListItem>
            <Divider/>
          </List>
          <List aria-label="age">
            <ListItem>
              Age: {animal.age}
            </ListItem>
            <Divider/>
          </List>
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Adoppt">
          <IconButton aria-label="adoppt" style={{color: '#961a1b'}}>
            <FavoriteIcon/>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  )
}
