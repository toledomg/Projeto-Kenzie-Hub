import React from "react";
import { HomeSection } from "./style";
import FormLogin from "../../components/Main/Form/FormLogin";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//

function Home() {
  const navigate = useNavigate();
  const CadPage = () => navigate("/cadastro");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitFunction = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@HubKenzieToken"));
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: 1 }}
      >
        <HomeSection>
          <h1>Kenzie Hub</h1>
          <div>
            <h1>Login</h1>
            <FormLogin
              onSubmit={handleSubmit(onSubmitFunction)}
              navigate={navigate}
            />
            <div>
              <span>Ainda não possui uma conta?</span>

              <Link to="/cadastro">Cadastre-se</Link>
            </div>
          </div>
        </HomeSection>
      </motion.div>
    </>
  );
}

export default Home;
