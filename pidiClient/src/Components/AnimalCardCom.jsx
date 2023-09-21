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
  console.log(animal)

  return (
    <Card sx={{maxWidth: 345}}>
      {animal.animalImage? (
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          img={animal.animalImage.filePath}
          alt={animal.name}
        />
      ) : null}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {animal.name}
        </Typography>
        <List aria-label="species">
          <ListItem>
            Species: {animal.species}
          </ListItem>
        </List>
        <Divider/>
        <List aria-label="age">
          <ListItem>
            Age: {animal.age}
          </ListItem>
        </List>
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
