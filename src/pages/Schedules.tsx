import React, { useContext } from "react";
import { MyContext } from "../app/Context";
import HeaderSidebar from "../components/HeaderSidebar";
import Employees from "../components/shedule/Employees";
import Residents from "../components/shedule/Residents";
import ScheduleTop from "../components/shedule/ScheduleTop";
import Teams from "../components/shedule/Teams";
import ResidentSub from "../components/sidebarSub/ResidentSub";
import TeamsSub from "../components/sidebarSub/TeamsSub";
import { type ContextType } from "../types/contextType";

const Process: React.FC = () => {
  const { mainMenu, selectLeader } = useContext(MyContext) as ContextType;

  return (
    <div>
      <HeaderSidebar headerMenuShow={true}>
        <div className="process-page-body-container">
          {mainMenu === "Residents" && <ResidentSub />}
          {mainMenu === "Teams" && <TeamsSub />}
          <div className="sheduleteam container">
            {(mainMenu === "Residents" || mainMenu === "Teams") && (
              <ScheduleTop />
            )}
            {mainMenu === "Residents" && (
              <>
                <Residents
                  arrNumber={[1, 2, 3]}
                  title="Ressort Gardening"
                  mainMenu={mainMenu}
                />
                <div className="maincreate-ressort-btn__scheduleteambodybtn">
                  <button className="maincreate-ressort-btn btn">
                    Create Ressort
                  </button>
                </div>
              </>
            )}
            {mainMenu === "Teams" && (
              <>
                <Teams
                  arrNumber={[1, 3, 4]}
                  title="Landscape Gardening Department"
                  mainMenu={mainMenu}
                />
                <div className="maincreate-ressort-btn__scheduleteambodybtn">
                  <button className="maincreate-ressort-btn btn">
                    Create Ressort
                  </button>
                </div>
                {selectLeader && (
                  <Teams
                    arrNumber={[1]}
                    title="Butcher's department"
                    mainMenu={mainMenu}
                  />
                )}
              </>
            )}
            {mainMenu === "Employees" && <Employees />}
          </div>
        </div>
      </HeaderSidebar>
    </div>
  );
};

export default Process;
