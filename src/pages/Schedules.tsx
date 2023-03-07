import React, { useContext } from "react";
import { MyContext } from "../app/Context";
import HeaderSidebar from "../components/HeaderSidebar";
import ScheduleBody from "../components/shedule/ScheduleBody";
import ScheduleTop from "../components/shedule/ScheduleTop";
import SidebarSub from "../components/SidebarSub";
import { type TodoContextType } from "../types/contextType";

const Process: React.FC = () => {
  const { mainMenu } = useContext(
    MyContext
  ) as TodoContextType;

  return (
    <div>
      <HeaderSidebar headerMenuShow={true}>
        <div className="process-page-body-container">
          <SidebarSub topValue={mainMenu}/>
          <div className="sheduleteam container">
            <ScheduleTop />
            <ScheduleBody/>
          </div>
        </div>
      </HeaderSidebar>
    </div>
  );
};

export default Process;
