const registerUser = () => {
  return {
    type: "REGISTER_USER",
    payload: {
      username: "",
      email: "",
      password: "",
    },
  };
};

export { registerUser };
