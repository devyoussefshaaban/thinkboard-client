import { Box, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from "./NoteCard";
import SlideModal from "../utils/SlideModal";
import { useState } from "react";
import type { AppDispatch } from "../context";
import { deleteNote } from "../context/actions/notesActions";
import type { Note } from "../models/Note";
import CreateNoteForm from "./CreateNoteForm";

const NotesContainer = () => {
  const { notes } = useSelector((state: any) => state.notes);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const handleOpenCreateModal = () => setOpenCreateModal(true);
  const handleCloseCreateModal = () => setOpenCreateModal(false);

  const [activeNoteId, setActiveNoteId] = useState<Note["_id"]>("");
  const [activeNote, setActiveNote] = useState<Note | undefined>(undefined);

  const dispatch: AppDispatch = useDispatch();

  const handleDeleteNote = () => {
    dispatch(deleteNote(activeNoteId));
    handleCloseDeleteModal();
  };

  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h5" gutterBottom textAlign="center">
          Your Notes
        </Typography>
        <Typography variant="body1" gutterBottom textAlign="center">
          Here are all your notes. You can edit or delete them as needed.
        </Typography>
        <Box mt={4} mb={2} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenCreateModal}
            sx={{ textTransform: "capitalize" }}
          >
            Create New Note
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        {notes.map((note: any) => (
          <Grid item xs={12} sm={6} md={4} key={note._id}>
            <NoteCard
              note={note}
              handleOpenDeleteModal={handleOpenDeleteModal}
              setActiveNoteId={setActiveNoteId}
              setActiveNote={setActiveNote}
              activeNote={activeNote}
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

      <SlideModal open={openCreateModal} handleClose={handleCloseCreateModal}>
        <CreateNoteForm
          formType="CREATE"
          handleCloseCreateModal={handleCloseCreateModal}
        />
      </SlideModal>
    </Box>
  );
};

export default NotesContainer;
