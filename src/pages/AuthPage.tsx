import { RegisterForm } from "../components";

const AuthPage = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "70vh",
      }}
    >
      <RegisterForm />
    </div>
  );
};

export default AuthPage;
