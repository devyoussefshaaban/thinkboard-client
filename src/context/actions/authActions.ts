import {
  authApi,
  type LoginUserRequest,
  type RegisterUserRequest,
} from "../../api";
import { AUTH_ERROR } from "./actionTypes";

const registerUser =
  (requsetBody: RegisterUserRequest) => async (dispatch: any) => {
    try {
      const res = await authApi.registerUser(requsetBody);
      const data = res.data;

      dispatch({
        type: "AUTH_REGISTER",
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response?.data?.message || "Registration failed",
      });
    }
  };

const loginUser = (requsetBody: LoginUserRequest) => async (dispatch: any) => {
  try {
    const res = await authApi.loginUser(requsetBody);
    const data = res.data;

    dispatch({
      type: "AUTH_LOGIN",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response?.data?.message || "Logging in failed",
    });
  }
};

const getUserProfile = () => async (dispatch: any) => {
  try {
    const res = await authApi.getUserProfile();
    const data = res.data;

    dispatch({
      type: "GET_USER_PROFILE",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response?.data?.message || "Fetching user profile failed",
    });
  }
};

export { registerUser, loginUser, getUserProfile };
