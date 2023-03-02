import React from "react";
import HeaderSidebar from "../../components/HeaderSidebar";
import SidebarSub from "../../components/SidebarSub";
import MainCreateRessort from "../../components/MainCreateRessort";

const Process: React.FC = () => {
  return (
    <div>
      <HeaderSidebar>
        <div className="process-page-body-container">
          <SidebarSub />
          <MainCreateRessort />
        </div>
      </HeaderSidebar>
    </div>
  );
};

export default Process;
