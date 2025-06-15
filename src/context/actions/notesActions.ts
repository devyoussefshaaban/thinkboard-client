import type { AppDispatch } from "..";
import { notesApi, type CreateNoteRequest } from "../../api";
import { CREATE_NEW_NOTE, NOTES_ERROR } from "./actionTypes";

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
    } catch (error: any) {
      dispatch({
        type: NOTES_ERROR,
        payload: error.response?.data?.message || "Creating note failed",
      });
    }
  };

export { getAllNotes, createNewNote };
