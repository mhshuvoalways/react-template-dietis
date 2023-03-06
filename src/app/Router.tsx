import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound404 from "../pages/NotFound404";
import Process from "../pages/settings/Process";
import Schedules from "../pages/Schedules";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Schedules />} />
        <Route path="process" element={<Process />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
