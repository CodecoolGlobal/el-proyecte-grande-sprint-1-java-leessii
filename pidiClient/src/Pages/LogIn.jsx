import React from "react";
import Grid from "@mui/material/Grid";
import UserLogInForm from "../Components/UserLogInForm";

function LogIn() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={10} sm={6} md={4}>
        <UserLogInForm />
      </Grid>
    </Grid>
  );
}

export default LogIn;
