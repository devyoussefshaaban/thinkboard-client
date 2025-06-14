import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

const RegisterForm = () => {
  return (
    <Box
      margin={"auto"}
      maxWidth={400}
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
      <form>
        <Box mb={2}>
          <InputLabel sx={{ fontWeight: 600 }} htmlFor="name">
            Username
          </InputLabel>
          <FormControl fullWidth>
            <TextField type="name" placeholder="Enter your username" />
          </FormControl>
        </Box>
        <Box mb={2}>
          <InputLabel sx={{ fontWeight: 600 }} htmlFor="email">
            Email
          </InputLabel>
          <FormControl fullWidth>
            <TextField type="name" placeholder="Enter your email" />
          </FormControl>
        </Box>
        <Box mb={2}>
          <InputLabel sx={{ fontWeight: 600 }} htmlFor="password">
            Password
          </InputLabel>
          <FormControl fullWidth>
            <TextField placeholder="Enter your password" type="password" />
          </FormControl>
        </Box>
        <Box display="flex" mt={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled
            sx={{ textTransform: "capitalize", margin: "auto" }}
          >
            Register
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
