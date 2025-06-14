import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect } from "react";
import type { AppDispatch } from "./context";
import { getUserProfile } from "./context/actions/authActions";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(getUserProfile());
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
