import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { HomeSection } from "./style";

import { HomeLoginContext } from "./../../providers/HomeLoginContext";

import FormLogin from "../../components/Main/Form/FormLogin";
import ModalEdit from "./Modal/index";

function Home() {
  const { register, handleSubmit, errors, onSubmitFunction } =
    useContext(HomeLoginContext);

  const navigate = useNavigate();
  const CadPage = () => navigate("/cadastro");

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
          <span>Kenzie Hub</span>
          <div>
            <h2>Login</h2>
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
