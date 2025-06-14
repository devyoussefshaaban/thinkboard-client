import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../context";

const MainHeader = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <header style={{ padding: "10px 20px", backgroundColor: "#f5f5f5" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" style={{ width: 85 }} />
        </Link>
        {isAuthenticated ? (
          <Link to="/" className="nav-link">
            <Avatar src="https://avatar.iran.liara.run/public/boy" />
          </Link>
        ) : (
          <Button>Login</Button>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;
