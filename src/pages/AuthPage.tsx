import { useState } from "react";
import { LoginForm, RegisterForm } from "../components";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false);

  const toggleForm = () => setIsLoginForm(!isLoginForm);

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "70vh",
      }}
    >
      {isLoginForm ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegisterForm toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
