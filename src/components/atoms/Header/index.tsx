import logo from "@assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { ContainerHeader, ItemMenu, Navbar } from "./styles";
import { useAuth } from "@/stores/useAuth";
import { Buttons } from "@/components/molecules/buttons";


const Header = () => {

  return (
    <ContainerHeader>
      <img src={logo} alt="Logo ser" />
    </ContainerHeader>
  );
};

export default Header;