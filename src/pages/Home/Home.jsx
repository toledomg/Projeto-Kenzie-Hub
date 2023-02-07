import React from "react";
import { HomeSection } from "./style/style";
import { BtnDefault, BtnMedium } from "./../../style/Global/Buttons";
import FormLogin from "../../components/Main/Form/FormLogin";
import { useNavigate } from "react-router-dom";

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
          <BtnMedium onClick={CadPage}>Cadastre-se</BtnMedium>
        </div>
      </div>
    </HomeSection>
  );
}

export default Home;
