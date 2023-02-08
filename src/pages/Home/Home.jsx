import React from "react";
import { HomeSection } from "./style";
import FormLogin from "../../components/Main/Form/FormLogin";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const CadPage = () => navigate("/cadastro");

  return (
    <HomeSection>
      <h1>Kenzie Hub</h1>
      <div>
        <h1>Login</h1>
        <FormLogin />
        <div>
          <span>Ainda não possui uma conta?</span>
          <Link to="/cadastro">Cadastre-se</Link>
        </div>
      </div>
    </HomeSection>
  );
}

export default Home;
