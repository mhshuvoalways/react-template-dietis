import React from "react";
// import { MyContext } from "../../app/Context";
import HeaderSidebar from "../../components/HeaderSidebar";
import MainCreateRessort from "../../components/MainCreateRessort";
import ProcessSub from "../../components/sidebarSub/ProcessSub";
// import { type ContextType } from "../../types/contextType";

const Process: React.FC = () => {
  // const { mainMenu } = useContext(MyContext) as ContextType;

  return (
    <div>
      <HeaderSidebar headerMenuShow={false}>
        <div className="process-page-body-container">
          <ProcessSub />
          <MainCreateRessort />
        </div>
      </HeaderSidebar>
    </div>
  );
};

export default Process;
