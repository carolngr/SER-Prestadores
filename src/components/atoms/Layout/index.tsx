import { useEffect } from "react";
import Header from "../Header";
import { Container } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "@/components/templates/Sidebar";

const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    if (!token) {
      navigate("/auth/sign-in");
    }
  }, [token]);

  return (
    <Sidebar>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Sidebar>
  );
};

export default Layout;