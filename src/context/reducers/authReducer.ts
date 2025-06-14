import { toast } from "react-toastify";
import type { User } from "../../models/User";
import {
  AUTH_ERROR,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  GET_USER_PROFILE,
} from "../actions/actionTypes";
import Cookie from "js-cookie";

const initialState: {
  isAuthenticated: boolean;
  user: null | User;
} = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_REGISTER: {
      toast.success("Registered successful!");
      Cookie.set("token", action.payload.token, { expires: 7 });
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    }
    case AUTH_LOGIN:
      toast.success("Logged in successful!");
      Cookie.set("token", action.payload.token, { expires: 7 });
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case AUTH_ERROR:
      toast.error(action.payload);
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
