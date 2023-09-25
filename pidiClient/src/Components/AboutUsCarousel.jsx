import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, IconButton, Typography, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import dogImage from "../Assets/Images/dogcover.jpg";
import { useNavigate } from "react-router-dom";

const AboutUsCarousel = () => {
  var items = [
    {
      image: dogImage,
      name: "ADOPT AND LOVE",
    },
    {
      image: dogImage,
      name: "BE THEIR HERO!",
    },
  ];

  return (
    <>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

function Item(props) {
  const { item } = props;
  const navigate = useNavigate();

  const handleIconButtonClick = () => {
    navigate("/adoption");
  };

  return (
    <Paper
      style={{
        position: "relative",
        height: "500px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `url(${item.image}) no-repeat center center`,
          position: "relative",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.15)",
          }}
        ></div>
        <Tooltip title="Adopt">
          <IconButton
            aria-label="adopt"
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#961a1b",
              width: "5rem",
              height: "5rem",
            }}
            onClick={handleIconButtonClick}
          >
            <FavoriteIcon style={{ fontSize: "3rem" }} />
          </IconButton>
        </Tooltip>

        <Typography
          variant="h4"
          style={{
            position: "absolute",
            bottom: "40%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            textAlign: "center",
            width: "80%",
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
      </div>
    </Paper>
  );
}

export default AboutUsCarousel;
