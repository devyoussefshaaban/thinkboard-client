import { useEffect, useState } from "react";
import type { AppDispatch, RootState } from "../context";
import { getAllNotes } from "../context/actions/notesActions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { CreateNoteForm, NotesContainer } from "../components";
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
            <Button
              sx={{ textTransform: "capitalize" }}
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Create New Note
            </Button>
          </Box>
        ) : (
          <NotesContainer />
        )}
      </div>
      <SlideModal open={openModal} handleClose={handleClose}>
        <CreateNoteForm />
      </SlideModal>
    </>
  );
};

export default HomePage;
