import type { ReactNode } from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const MainLayout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MainHeader />
      <main style={{ flex: 1 }}>{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
