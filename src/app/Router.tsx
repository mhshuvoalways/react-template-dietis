import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Process from "../pages/settings/Process";
import ScheduleTeam from "../pages/schedule/Team";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="process" element={<Process />} />
        <Route path="" element={<ScheduleTeam />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
