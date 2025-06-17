import { toast } from "react-toastify";
import type { Note } from "../../models/Note";
import {
  CREATE_NEW_NOTE,
  DELETE_NOTE,
  GET_ALL_NOTES,
  NOTES_ERROR,
  SET_ACTIVE_NOTE,
  UPDATE_NOTE,
} from "../actions/actionTypes";

const initialState: {
  notes: Note[];
  activeNote: Note | null;
} = {
  notes: [],
  activeNote: null,
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
    case DELETE_NOTE:
      toast.success("Note deleted successfully.");
      return {
        ...state,
      };
    case UPDATE_NOTE:
      toast.success("Note updated successfully.");
      return {
        ...state,
      };
    case SET_ACTIVE_NOTE:
      return {
        ...state,
        activeNote: action.payload,
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
