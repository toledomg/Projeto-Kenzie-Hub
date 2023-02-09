import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home/Home";
import Cadastro from "./../pages/Cadastro/Cadastro";
import NotFoundPage from "./../pages/404/404";
import Dashboard from "./../pages/Dashboard/Dashboard";

function AppRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
