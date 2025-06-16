import {
  Box,
  Button,
  IconButton,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { AppDispatch } from "../context";
import { useDispatch } from "react-redux";
import { createNewNote, editNote } from "../context/actions/notesActions";
import CloseIcon from "@mui/icons-material/Close";
import type { FC } from "react";
import type { Note } from "../models/Note";

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

interface IProps {
  formType: "CREATE" | "EDIT";
  handleCloseCreateModal?: () => void;
  activeNote?: Note;
}
const CreateNoteForm: FC<IProps> = ({
  formType,
  handleCloseCreateModal,
  activeNote,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const dispatch: AppDispatch = useDispatch();

  const isCreateForm = formType === "CREATE";
  const onSubmit = (data: any) => {
    isCreateForm
      ? dispatch(createNewNote(data))
      : dispatch(editNote(activeNote?._id as string, data));
    reset();
    handleCloseCreateModal && handleCloseCreateModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack mb={4}>
        <Box>
          <Typography variant="h5" gutterBottom textAlign="center">
            {isCreateForm ? "Create" : "Update"} Note
          </Typography>
          <Typography variant="body1" gutterBottom>
            Fill in the details below to create a new note.
          </Typography>
        </Box>
        <IconButton
          sx={{
            width: "fit-content",
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClick={handleCloseCreateModal}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <Box mb={2}>
        <InputLabel htmlFor="title">Title</InputLabel>
        <TextField
          {...register("title")}
          placeholder="Enter note title"
          defaultValue={activeNote?.title}
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
          defaultValue={activeNote?.content}
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
        {isCreateForm ? "Create" : "Save"} Note
      </Button>
    </form>
  );
};

export default CreateNoteForm;
