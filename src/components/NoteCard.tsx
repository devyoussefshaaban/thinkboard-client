import { useState, type FC } from "react";
import type { Note } from "../models/Note";
import { Box, Card, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SlideModal from "../utils/SlideModal";
import CreateNoteForm from "./CreateNoteForm";

interface IProps {
  note: Note;
  handleOpenDeleteModal?: () => void;
  setActiveNoteId?: (id: Note["_id"]) => void;
  setActiveNote?: (id: Note) => void;
  activeNote?: Note;
}

const NoteCard: FC<IProps> = ({
  note,
  handleOpenDeleteModal,
  setActiveNoteId,
  setActiveNote,
  activeNote,
}) => {
  const { _id, title, content } = note;

  const onClickDeleteIcon = () => {
    if (setActiveNoteId) {
      setActiveNoteId(_id);
    }
    if (handleOpenDeleteModal) {
      handleOpenDeleteModal();
    }
  };

  const onClickEditIcon = () => {
    if (setActiveNote) {
      setActiveNote(note);
    }
    if (handleOpenCreateModal) {
      handleOpenCreateModal();
    }
  };

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const handleOpenCreateModal = () => setOpenCreateModal(true);
  const handleCloseCreateModal = () => setOpenCreateModal(false);

  return (
    <>
      <Card
        sx={{
          padding: "20px",
          marginBottom: "20px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{content}</Typography>

        <Box mt={3} ml="auto" display={"flex"} justifyContent={"flex-end"}>
          <IconButton onClick={onClickEditIcon}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={onClickDeleteIcon}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      </Card>
      <SlideModal open={openCreateModal} handleClose={handleCloseCreateModal}>
        <CreateNoteForm
          formType="EDIT"
          handleCloseCreateModal={handleCloseCreateModal}
          activeNote={activeNote}
        />
      </SlideModal>
    </>
  );
};

export default NoteCard;
