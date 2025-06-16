import { toast } from "react-toastify";
import type { Note } from "../../models/Note";
import {
  CREATE_NEW_NOTE,
  DELETE_NOTE,
  GET_ALL_NOTES,
  NOTES_ERROR,
  UPDATE_NOTE,
} from "../actions/actionTypes";

const initialState: {
  notes: Note[];
} = {
  notes: [],
};

const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case CREATE_NEW_NOTE:
      toast.success("Note created successfully!");
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case UPDATE_NOTE:
      toast.success("Note updated successfully.");
      return {
        ...state,
      };
    case NOTES_ERROR:
      toast.error(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default notesReducer;
