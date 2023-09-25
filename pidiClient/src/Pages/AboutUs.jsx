import React from "react";
import { Button, Container, Box } from "@mui/material";
import NavbarCom from "../Components/NavbarCom";
import { Link } from "react-router-dom";
import AboutUsCarousel from "../Components/AboutUsCarousel";
import AboutUsCardCom from "../Components/AboutUsCardCom";
import Grid from "@mui/material/Grid";
import OurMission from "../Assets/Images/ourmission.jpg";
import WhoWeAre from "../Assets/Images/whoweare.jpg";
import AdoptionService from "../Assets/Images/adoptionservice.jpg";
import FooterCom from "../Components/FooterCom";

const customButtons = [
  <Button key="donate" color="inherit" component={Link} to="/donate">
    Donate
  </Button>,
  <Button key="animalAdoption" color="inherit" component={Link} to="/adoption">
    Adopt
  </Button>,
];

const cardContent = [
  {
    title: "Our Mission",
    description: [
      "Dedicated to rescuing and providing a safe haven for animals in need. We strive to provide a second chance for animals who were abandoned or couldn't stay in their homes.",
    ],
    image: OurMission,
    toolTip: "Contact Us",
    navigate: "/contactUs",
  },
  {
    title: "Who We Are",
    description: [
      "A passionate team of animal lovers committed to making a difference. We operate solely on donations from kind-hearted individuals like you. Your support keeps us going.",
    ],
    image: WhoWeAre,
    toolTip: "Donate",
    navigate: "/donate",
  },
  {
    title: "Adoption Services",
    description: [
      "Find your perfect furry companion and give them a forever home. Join us in our mission! We're looking for volunteers and temporary foster homes to help care for our animals.",
    ],
    image: AdoptionService,
    toolTip: "Adopt",
    navigate: "/adoption",
  },
];

const AboutUs = () => {
  return (
    <>
      <NavbarCom customButtons={customButtons} />
      <AboutUsCarousel />
      <Box sx={{ margin: 8 }}>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            {cardContent.map((content, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <AboutUsCardCom cardContent={content} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <FooterCom />
    </>
  );
};

export default AboutUs;
