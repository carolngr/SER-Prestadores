import { Routes as RoutesDOM, Route, Navigate, useNavigate } from "react-router-dom";
import { Providers } from "../pages/private/Providers";
import Layout from "../components/atoms/Layout";
import { CreateProvider } from "../pages/private/CreateProvider";
import SignIn from "@/pages/public/SignIn";
import { useEffect } from "react";

export const Routes = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if(token){
      navigate("/home");
    }
  },[]);

  return (
    <RoutesDOM>
      <Route path="/auth">
        <Route path="sign-in" element={<SignIn />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="providers" element={<Providers />} />
        <Route
          path="CreateProvider/:id_provider"
          element={<CreateProvider />}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </RoutesDOM>
  );
};