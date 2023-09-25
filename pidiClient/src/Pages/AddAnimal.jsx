import React, { useState } from "react";
import NavbarCom from "../Components/NavbarCom";
import { Button, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AddAnimalFormCom from "../Components/AddAnimalFormCom";
import Grid from "@mui/material/Grid";
import { useMutation } from "@tanstack/react-query";
import AnimalsApi from "../Api/AnimalsApi";
import { useForm } from "react-hook-form";
import UploadImageCom from "../Components/UploadImageCom";

const customButtons = [
  <Button key="allAnimlas" color="inherit" component={Link} to="/admin">
    All animals
  </Button>,
];

function AddAnimal() {
  const navigate = useNavigate();
  const [animalImage, setAnimalImage] = useState(null);

  const saveAnimalMutation = useMutation(async (newData) => {
    const response = await AnimalsApi.saveAnimal(newData);
    return response.data;
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      animal: {
        name: "",
        age: "",
        species: "",
        adoptionStatus: null,
        admissionDate: null,
      },
      animalImage: "",
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append(
      "animal",
      new Blob([JSON.stringify(data.animal)], {
        type: "application/json",
      })
    );
    formData.append("animalImage", animalImage);
    saveAnimalMutation.mutateAsync(formData).then(() => {
      navigate("/admin");
    });
  };

  const handleImageUpload = (uploadedFiles) => {
    setAnimalImage(uploadedFiles[0]);
  };

  return (
    <div>
      <NavbarCom customButtons={customButtons} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Grid
            container
            spacing={5}
            justifyContent="center"
            style={{ marginTop: "20px" }}
          >
            <Grid item xs={12} sm={6}>
              <UploadImageCom onImageUpload={handleImageUpload} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AddAnimalFormCom control={control} />
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  );
}

export default AddAnimal;
