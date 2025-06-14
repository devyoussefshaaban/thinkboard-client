const MainFooter = () => {
  return (
    <footer
      style={{
        backgroundColor: "#282c34",
        color: "#ffffff",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Youssef Shaaban. All rights
          reserved.
        </p>
        <p>
          <a href="/privacy-policy" style={{ color: "white" }}>
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" style={{ color: "white" }}>
            {" "}
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
