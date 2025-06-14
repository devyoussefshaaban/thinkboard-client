import type { User } from "../../models/User";
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER } from "../actions/actionTypes";

const initialState: {
  isAuthenticated: boolean;
  user: null | User;
} = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_REGISTER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case AUTH_LOGIN:
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
    default:
      return state;
  }
};

export default authReducer;
