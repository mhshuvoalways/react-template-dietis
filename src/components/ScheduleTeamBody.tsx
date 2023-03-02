import React from "react";
import Plus from "../assets/images/plus.svg";

const ScheduleTeamBody: React.FC = () => {
  return (
    <div className="scheduleteambody">
      <p className="scheduleteambody-title">Abteilung Landschaftsgärtnerei</p>
      <div className="scheduleteambody-card-wrapper">
        <div className="scheduleteambody-card">
          <p className="scheduleteambody-card-para">Hoffman Volker</p>
          <p className="scheduleteambody-card-para">Thomas Heinz</p>
        </div>
        <div className="scheduleteambody-card">
          <p className="scheduleteambody-card-para">Hoffman Volker</p>
          <p className="scheduleteambody-card-para">Thomas Heinz</p>
        </div>
        <div className="scheduleteambody-card">
          <p className="scheduleteambody-card-para">Hoffman Volker</p>
          <p className="scheduleteambody-card-para">Thomas Heinz</p>
        </div>
        <div className="scheduleteambody-card scheduleteambody-card__plus">
          <img src={Plus} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ScheduleTeamBody;
