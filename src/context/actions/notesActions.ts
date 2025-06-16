import type { AppDispatch } from "..";
import {
  notesApi,
  type CreateNoteRequest,
  type UpdateNoteRequest,
} from "../../api";
import type { Note } from "../../models/Note";
import {
  CREATE_NEW_NOTE,
  DELETE_NOTE,
  NOTES_ERROR,
  UPDATE_NOTE,
} from "./actionTypes";

const getAllNotes = () => async (dispatch: any) => {
  try {
    const res = await notesApi.getAllNotes();
    const data = res.data;

    dispatch({
      type: "GET_ALL_NOTES",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: NOTES_ERROR,
      payload: error.response?.data?.message || "Fetching notes failed",
    });
  }
};

const createNewNote =
  (requestBody: CreateNoteRequest) => async (dispatch: AppDispatch) => {
    try {
      const res = await notesApi.createNewNote(requestBody);
      const data = res.data;

      dispatch({
        type: CREATE_NEW_NOTE,
        payload: data,
      });

      dispatch(getAllNotes());
    } catch (error: any) {
      dispatch({
        type: NOTES_ERROR,
        payload: error.response?.data?.message || "Creating note failed",
      });
    }
  };

const deleteNote = (noteId: Note["_id"]) => async (dispatch: AppDispatch) => {
  try {
    const res = await notesApi.deleteNote(noteId);
    const data = res.data;

    dispatch({
      type: DELETE_NOTE,
      payload: data,
    });

    dispatch(getAllNotes());
  } catch (error: any) {
    dispatch({
      type: NOTES_ERROR,
      payload: error.response?.data?.message || "Deleting note failed",
    });
  }
};

const editNote =
  (noteId: Note["_id"], requestBody: UpdateNoteRequest) =>
  async (dispatch: AppDispatch) => {
    try {
      const res = await notesApi.editNote(noteId, requestBody);
      const data = res.data;

      dispatch({
        type: UPDATE_NOTE,
        payload: data,
      });

      dispatch(getAllNotes());
    } catch (error: any) {
      dispatch({
        type: NOTES_ERROR,
        payload: error?.message || "Updating note failed.",
      });
    }
  };

export { getAllNotes, createNewNote, deleteNote, editNote };
