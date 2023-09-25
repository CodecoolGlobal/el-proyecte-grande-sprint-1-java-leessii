import * as React from "react";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function AboutUsCardCom({ cardContent }) {
  const navigate = useNavigate();

  const handleIconButtonClick = () => {
    navigate(cardContent.navigate);
  };

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 4 }}>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        src={cardContent.image}
        alt={cardContent.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardContent.title}
        </Typography>
        <List aria-label="description">
          <ListItem>{cardContent.description}</ListItem>
        </List>
        <Divider />
        <List aria-label="age">
          <ListItem>{cardContent.age}</ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Tooltip title={cardContent.toolTip}>
          <IconButton
            aria-label="adopt"
            style={{ color: "#961a1b" }}
            onClick={handleIconButtonClick}
          >
            <FavoriteIcon style={{ fontSize: "2rem" }} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
