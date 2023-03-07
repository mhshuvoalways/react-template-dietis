import React, { useContext } from "react";
import { MyContext } from "../../app/Context";
import HeaderSidebar from "../../components/HeaderSidebar";
import MainCreateRessort from "../../components/MainCreateRessort";
import SidebarSub from "../../components/SidebarSub";
import { type TodoContextType } from "../../types/contextType";

const Process: React.FC = () => {
  const { mainMenu } = useContext(MyContext) as TodoContextType;

  return (
    <div>
      <HeaderSidebar headerMenuShow={true}>
        <div className="process-page-body-container">
          <SidebarSub topValue={mainMenu} />
          <MainCreateRessort />
        </div>
      </HeaderSidebar>
    </div>
  );
};

export default Process;
