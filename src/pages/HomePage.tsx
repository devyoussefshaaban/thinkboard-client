import { useEffect, useState } from "react";
import type { AppDispatch, RootState } from "../context";
import { getAllNotes } from "../context/actions/notesActions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { CreateNoteBtn, CreateNoteForm, NotesContainer } from "../components";
import SlideModal from "../utils/SlideModal";

const HomePage = () => {
  const { notes } = useSelector((state: RootState) => state.notes);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNotes());
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <div>
        {notes.length === 0 ? (
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <h2>No Notes Available</h2>
            <Box sx={{ display: "grid", placeItems: "center", my: 3 }}>
              <CreateNoteBtn handleOpen={handleOpen} />
            </Box>
          </Box>
        ) : (
          <>
            <Box my={2}>
              <Typography variant="h5" gutterBottom textAlign="center">
                Your Notes
              </Typography>
              <Typography variant="body1" gutterBottom textAlign="center">
                Here are all your notes. You can edit or delete them as needed.
              </Typography>
            </Box>
            <Box sx={{ display: "grid", placeItems: "center", my: 3 }}>
              <CreateNoteBtn handleOpen={handleOpen} />
            </Box>
            <NotesContainer />
          </>
        )}
      </div>
      <SlideModal open={openModal} handleClose={handleClose}>
        <CreateNoteForm
          formType="CREATE"
          handleCloseCreateModal={handleClose}
        />
      </SlideModal>
    </>
  );
};

export default HomePage;
