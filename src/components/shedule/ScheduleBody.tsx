import React, { useContext } from "react";
import { MyContext } from "../../app/Context";
import { type TodoContextType } from "../../types/contextType";
import ScheduleBodyCard from "./ScheduleBodyCard";

const ScheduleTeamBody: React.FC = () => {
  const { mainMenu } = useContext(MyContext) as TodoContextType;

  return (
    <div>
      <ScheduleBodyCard
        arrNumber={[1, 2, 3]}
        title="Abteilung Landschaftsgärtnerei"
        mainMenu={mainMenu}
      />
      <ScheduleBodyCard
        arrNumber={[1]}
        title="Abteilung Metzgerei"
        mainMenu={mainMenu}
      />
      {mainMenu === "Teams" && (
        <div className="maincreate-ressort-btn__scheduleteambodybtn">
          <button className="maincreate-ressort-btn btn">Create Ressort</button>
        </div>
      )}
    </div>
  );
};

export default ScheduleTeamBody;
