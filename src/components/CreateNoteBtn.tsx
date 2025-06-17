import { Button } from "@mui/material";
import type { FC } from "react";

interface IProps {
  handleOpen: () => void;
}

const CreateNoteBtn: FC<IProps> = ({ handleOpen }) => {
  return (
    <Button
      sx={{ textTransform: "capitalize" }}
      variant="contained"
      color="primary"
      onClick={handleOpen}
    >
      Create New Note
    </Button>
  );
};

export default CreateNoteBtn;
