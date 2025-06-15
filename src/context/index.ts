import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk, type ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";
import notesReducer from "./reducers/notesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, any>)
  )
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
