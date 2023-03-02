import React from "react";
import HeaderSidebar from "../../components/HeaderSidebar";
import SidebarSub from "../../components/SidebarSub";
import ScheduleTop from "../../components/ScheduleTop";
import ScheduleTeamBody from "../../components/ScheduleTeamBody";

const Process: React.FC = () => {
  return (
    <div>
      <HeaderSidebar>
        <div className="process-page-body-container">
          <SidebarSub />
          <div className="sheduleteam">
            <ScheduleTop />
            <ScheduleTeamBody />
          </div>
        </div>
      </HeaderSidebar>
    </div>
  );
};

export default Process;
