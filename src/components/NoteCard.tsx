import { useState, type FC } from "react";
import type { Note } from "../models/Note";
import { Box, Card, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SlideModal from "../utils/SlideModal";
import CreateNoteForm from "./CreateNoteForm";
import type { AppDispatch } from "../context";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../context/actions/notesActions";

interface IProps {
  note: Note;
  handleOpenDeleteModal?: () => void;
}

const NoteCard: FC<IProps> = ({ note, handleOpenDeleteModal }) => {
  const { title, content } = note;

  const dispatch: AppDispatch = useDispatch();

  const onClickDeleteIcon = () => {
    dispatch(setActiveNote(note));
    if (handleOpenDeleteModal) {
      handleOpenDeleteModal();
    }
  };

  const onClickEditIcon = () => {
    dispatch(setActiveNote(note));
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
        />
      </SlideModal>
    </>
  );
};

export default NoteCard;
