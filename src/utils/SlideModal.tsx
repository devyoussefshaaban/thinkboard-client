import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import { forwardRef, type FC, type ReactElement, type Ref } from "react";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  children?: ReactElement;
  open: boolean;
  handleClose: () => void;
}

const SlideModal: FC<IProps> = ({ children, open, handleClose }) => {
  return (
    <>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
};

export default SlideModal;
