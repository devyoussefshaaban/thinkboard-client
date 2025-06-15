import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { AppDispatch } from "../context";
import { useDispatch } from "react-redux";
import { createNewNote } from "../context/actions/notesActions";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters long")
    .max(30, "Title cannot exceed 50 characters"),
  content: Yup.string()
    .required("Content is required")
    .min(10, "Content must be at least 10 characters long")
    .max(300, "Content cannot exceed 500 characters"),
});

const CreateNoteForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(createNewNote(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={4}>
        <Typography variant="h5" gutterBottom textAlign="center">
          Create Note
        </Typography>
        <Typography variant="body1" gutterBottom>
          Fill in the details below to create a new note.
        </Typography>
      </Box>
      <Box mb={2}>
        <InputLabel htmlFor="title">Title</InputLabel>
        <TextField
          {...register("title")}
          placeholder="Enter note title"
          sx={{ width: "100%" }}
          type="text"
          id="title"
          name="title"
        />
        {errors.title && (
          <Typography variant="body1" color="error">
            {errors?.title?.message}
          </Typography>
        )}
      </Box>
      <Box mb={2}>
        <InputLabel htmlFor="content">Content</InputLabel>
        <TextField
          {...register("content")}
          placeholder="Enter note content"
          sx={{ width: "100%" }}
          type="text"
          id="content"
          name="content"
        />
        {errors.content && (
          <Typography variant="body1" color="error">
            {errors?.content?.message}
          </Typography>
        )}
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ textTransform: "capitalize", margin: "auto", display: "block" }}
      >
        Create Note
      </Button>
    </form>
  );
};

export default CreateNoteForm;
