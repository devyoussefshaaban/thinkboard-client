import { notesApi } from "../../api";
import { NOTES_ERROR } from "./actionTypes";

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

export { getAllNotes };
