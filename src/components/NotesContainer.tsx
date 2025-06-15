import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const NotesContainer = () => {
  const { notes } = useSelector((state: any) => state.notes);

  return (
    <Box>
      {notes.length === 0 ? (
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <h2>No Notes Available</h2>
        </Box>
      ) : (
        <Box sx={{ padding: "20px" }}>
          {notes.map((note: any) => (
            <Box
              key={note._id}
              sx={{
                marginBottom: "10px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <h5>{note.title}</h5>
              <p>{note.content}</p>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NotesContainer;
