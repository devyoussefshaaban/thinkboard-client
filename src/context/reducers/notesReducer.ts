import type { Note } from "../../models/Note";

const initialState: {
  notes: Note[];
} = {
  notes: [],
};

const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_ALL_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    default:
      return state;
  }
};

export default notesReducer;
