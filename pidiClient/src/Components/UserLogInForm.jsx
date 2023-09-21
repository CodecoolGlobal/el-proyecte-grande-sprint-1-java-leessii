import { Button, FormGroup, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import usersApi from "../Api/UsersApi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserLogInForm = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const authUserMutation = useMutation(async (newData) => {
    const response = await usersApi.authUser(newData);
    console.log(response);
    return response;
  });

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await authUserMutation.mutateAsync(data);
      localStorage.setItem("jwtToken", res.data.token);
      console.log(localStorage.getItem("jwtToken"));

      if (
        window.location.pathname === "/admin" ||
        window.location.pathname === "/add"
      ) {
        window.location.reload();
      } else {
        navigate("/admin");
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setError("Password and Email don't match");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup
        sx={{
          padding: 2,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "primary.main",
          width: "100%",
        }}
      >
        <Controller
          control={control}
          name={"email"}
          render={({ field }) => (
            <TextField
              sx={{ paddingBottom: 2 }}
              required={true}
              label={"Email"}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name={"password"}
          render={({ field }) => (
            <TextField
              sx={{ paddingBottom: 2 }}
              required={true}
              label={"Password"}
              type="password"
              {...field}
            />
          )}
        />

        <Button color={"secondary"} variant={"contained"} type="submit">
          Log In
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </FormGroup>
    </form>
  );
};

export default UserLogInForm;
