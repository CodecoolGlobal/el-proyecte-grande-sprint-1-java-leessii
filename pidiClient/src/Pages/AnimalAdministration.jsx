<<<<<<< HEAD
import React from 'react'
import AnimalsApi from '../Api/AnimalsApi'
import AdoptionStatusApi from '../Api/AdoptionStatusApi'

import {useMutation, useQuery} from '@tanstack/react-query'
import {CircularProgress, Box, Button} from '@mui/material'
import '../index.css'
import AnimalDataGridCom from '../Components/AnimalDataGridCom/AnimalsDataGridCom'
import NavbarCom from '../Components/NavbarCom/NavbarCom'
import AddIcon from '@mui/icons-material/Add'
import {Link, useNavigate} from 'react-router-dom'



const AnimalAdministration = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('jwtToken');

=======
import React from "react";
import AnimalsApi from "../Api/AnimalsApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CircularProgress, Box, Button } from "@mui/material";
import "../index.css";
import AnimalDataGridCom from "../Components/AnimalsDataGridCom";
import NavbarCom from "../Components/NavbarCom";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const AnimalAdministration = () => {
>>>>>>> origin/formValidation
  const getAllAnimalsQuery = useQuery({
    queryKey: ["animals"],
    queryFn: () => AnimalsApi.getAllAnimals(),
<<<<<<< HEAD
    /*
    onError: (error) => {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        logout(); // Handle unauthorized access
      }
    },
    */
  })



  const getAdoptionStatusQuery = useQuery({
    queryKey: ['adoptionStatus'],
    queryFn: () => AdoptionStatusApi.get(),
  })

=======
  });
>>>>>>> origin/formValidation

  const deleteMutation = useMutation({
    mutationFn: (id) => AnimalsApi.delete(id),
    onSuccess: getAllAnimalsQuery.refetch,
  });

  const logout = () => {
    localStorage.removeItem('jwtToken');
    // You might want to perform additional actions like redirecting to the login page
    // or resetting component state after logout
  };

  if (!token) {
    navigate('/')
  }



  const customButtons = [
    <Button
      key="addAnimal"
      color="inherit"
      startIcon={<AddIcon />}
      component={Link}
      to="/add"
    >
      Add Animal
    </Button>,

    <Button
      key="logOut"
      color="inherit"
      startIcon={<LogoutIcon />}
      component={Link}
      to="/"
      onClick={() => localStorage.clear()}
    >
      Log Out
    </Button>,
  ];


  return (
    <div>
      <NavbarCom customButtons={customButtons} />
      <Box sx={{ margin: 6 }}>
        {getAllAnimalsQuery.isLoading ? (
          <CircularProgress />
        ) : (
          <AnimalDataGridCom
            animals={getAllAnimalsQuery.data}
            onDelete={deleteMutation.mutate}
          />
        )}
      </Box>
    </div>
  );
};


export default AnimalAdministration
