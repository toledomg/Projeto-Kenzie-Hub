import { React } from "react";

import { useNavigate } from "react-router-dom";
import { BtnText } from "../../style/Global/Buttons";
import { NotFound } from "./../404/styles";

function NotFoundPage() {
  const navigate = useNavigate();

  const backHomePage = () => navigate("/home");
  return (
    <NotFound>
      <h1>404 - Page Not Found</h1>
      <BtnText onClick={backHomePage}>Voltar</BtnText>
    </NotFound>
  );
}

export default NotFoundPage;
