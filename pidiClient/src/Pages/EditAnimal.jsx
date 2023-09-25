import { useParams } from "react-router-dom";
import NavbarCom from "../Components/NavbarCom";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import AddAnimalFormCom from "../Components/AddAnimalFormCom";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import AnimalsApi from "../Api/AnimalsApi";

const customButtons = [
  <Button key="allAnimlas" color="inherit" component={Link} to="/admin">
    All Animals
  </Button>,
];

const EditAnimal = () => {
  const params = useParams();
  console.log(params.id);

  const {
    data: animal,
    error,
    isLoading,
  } = useQuery(["animals", params.id], () =>
    AnimalsApi.getAnimalById(params.id)
  );

  console.log(animal);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      animal: {
        name: animal?.data.name || "",
        age: animal?.data.age || "",
        species: animal?.data.species || "",
        adoptionStatus: animal?.data.adoptionStatus || null,
        admissionDate: null,
      },
      animalImage: "",
    },
  });

  const onSubmit = (data) => {};

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <AddAnimalFormCom control={control} />
          </Grid>
        </Container>
      </form>
    </div>
  );
};

export default EditAnimal;
