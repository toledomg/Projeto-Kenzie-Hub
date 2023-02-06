import React from "react";
import { HomeSection } from "./style/style";
import { BtnDefault, BtnMedium } from "./../../style/Global/Buttons";
import FormLogin from "../../components/Main/Form/FormLogin";

function Home() {
  return (
    <HomeSection>
      <h1>Kenzie Hub</h1>
      <div>
        <h1>Login</h1>
        <FormLogin />
        <div>
          <span>Ainda não possui uma conta?</span>
          <BtnMedium>Cadastre-se</BtnMedium>
        </div>
      </div>
    </HomeSection>
  );
}

export default Home;
