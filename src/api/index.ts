import axios from "axios";
import Cookies from "js-cookie";
import type { Note } from "../models/Note";
const baseUrl = "http://localhost:8000/api";
const baseUrlV1 = `${baseUrl}/v1`;

export type RegisterUserRequest = {
  name: string;
  email: string;
  password: string;
};
export type LoginUserRequest = {
  email: string;
  password: string;
};

export type CreateNoteRequest = {
  title: string;
  content: string;
};
export type UpdateNoteRequest = {
  title?: string;
  content?: string;
};

const requestHeaders = {
  headers: {
    Authorization: `Bearer ${Cookies.get("token") || ""}`,
  },
};

const authApi = {
  registerUser: (requsetBody: RegisterUserRequest) =>
    axios.post(`${baseUrlV1}/auth/register`, { ...requsetBody }),
  loginUser: (requsetBody: LoginUserRequest) =>
    axios.post(`${baseUrlV1}/auth/login`, { ...requsetBody }),
  getUserProfile: () => axios.get(`${baseUrlV1}/auth/me`, requestHeaders),
};

const notesApi = {
  getAllNotes: () => axios.get(`${baseUrlV1}/notes`, requestHeaders),
  createNewNote: (requestBody: CreateNoteRequest) =>
    axios.post(`${baseUrlV1}/notes`, requestBody, requestHeaders),
  deleteNote: (noteId: Note["_id"]) =>
    axios.delete(`${baseUrlV1}/notes/${noteId}`, requestHeaders),
  editNote: (noteId: Note["_id"], requestBody: UpdateNoteRequest) =>
    axios.patch(`${baseUrlV1}/notes/${noteId}`, requestBody, requestHeaders),
};

export { authApi, notesApi };
