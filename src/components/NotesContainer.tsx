import { Box, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from "./NoteCard";
import SlideModal from "../utils/SlideModal";
import { useState } from "react";
import type { AppDispatch } from "../context";
import { deleteNote } from "../context/actions/notesActions";

const NotesContainer = () => {
  const { notes, activeNote } = useSelector((state: any) => state.notes);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const dispatch: AppDispatch = useDispatch();

  const handleDeleteNote = () => {
    dispatch(deleteNote(activeNote?._id));
    handleCloseDeleteModal();
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        {notes.map((note: any) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={note._id}>
            <NoteCard
              note={note}
              handleOpenDeleteModal={handleOpenDeleteModal}
            />
          </Grid>
        ))}
      </Grid>

      <SlideModal open={openDeleteModal} handleClose={handleCloseDeleteModal}>
        <>
          <Typography variant="h5" gutterBottom textAlign="center">
            Delete Note
          </Typography>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to delete this note? This action cannot be
            undone.
          </Typography>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Box mr={2}>
              <Button onClick={handleCloseDeleteModal}>Cancel</Button>
            </Box>
            <Box>
              <Button onClick={handleDeleteNote}>Delete</Button>
            </Box>
          </Box>
        </>
      </SlideModal>
    </Box>
  );
};

export default NotesContainer;
