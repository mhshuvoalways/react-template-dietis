import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound404 from "../pages/NotFound404";
import Process from "../pages/settings/Process";
import Schedules from "../pages/Schedules";
import Infochannel from "../pages/Infochannel";
import CreateTag from "../pages/settings/CreateTag";
import ActionTrigger from "../pages/settings/ActionTrigger";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Schedules />} />
        <Route path="process" element={<Process />} />
        <Route path="process/createtag" element={<CreateTag />} />
        <Route path="process/actiontrigger" element={<ActionTrigger />} />
        <Route path="infochannel" element={<Infochannel />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
