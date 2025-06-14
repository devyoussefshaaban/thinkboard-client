import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import MainLayout from "./layouts/main-layout/MainLayout.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./context/index.ts";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <App />
        </MainLayout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
