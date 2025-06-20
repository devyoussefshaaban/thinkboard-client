import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../context";
import { registerUser } from "../context/actions/authActions";
import type { FC } from "react";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};
const inputSchema = yup
  .object({
    name: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

interface IProps {
  toggleForm: () => void;
}

const RegisterForm: FC<IProps> = ({ toggleForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(inputSchema) });

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (data: RegisterFormData) => {
    dispatch(registerUser(data));
    reset();
  };

  return (
    <Box
      margin={"auto"}
      width={400}
      padding={2}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box mb={4}>
        <Typography variant="h4" textAlign="center">
          Register Form
        </Typography>
        <Divider />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <InputLabel sx={{ fontWeight: 600 }} htmlFor="name">
            Username
          </InputLabel>
          <FormControl fullWidth>
            <TextField
              type="name"
              placeholder="Enter your username"
              {...register("name", { required: true })}
            />
          </FormControl>
          <Typography variant="body1" color="error">
            {errors.name?.message}
          </Typography>
        </Box>
        <Box mb={2}>
          <InputLabel sx={{ fontWeight: 600 }} htmlFor="email">
            Email
          </InputLabel>
          <FormControl fullWidth>
            <TextField
              type="name"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            <Typography variant="body1" color="error">
              {errors.email?.message}
            </Typography>
          </FormControl>
        </Box>
        <Box mb={2}>
          <InputLabel sx={{ fontWeight: 600 }} htmlFor="password">
            Password
          </InputLabel>
          <FormControl fullWidth>
            <TextField
              placeholder="Enter your password"
              type="password"
              {...register("password", { required: true })}
            />
            <Typography variant="body1" color="error">
              {errors.password?.message}
            </Typography>
          </FormControl>
        </Box>
        <Box display="flex" mt={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={false}
            sx={{ textTransform: "capitalize", margin: "auto" }}
          >
            Register
          </Button>
        </Box>
      </form>
      <p
        style={{
          textAlign: "center",
          marginTop: "16px",
          color: "#555",
        }}
      >
        Already have an account?{" "}
        <Button
          onClick={() => toggleForm()}
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Login
        </Button>
      </p>
    </Box>
  );
};

export default RegisterForm;
