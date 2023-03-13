import React, { useContext } from "react";
import { MyContext } from "../../app/Context";
import { type ContextType } from "../../types/contextType";

const TeamsSub: React.FC = () => {
  const { selectUnassignLeaderHandler } = useContext(MyContext) as ContextType;

  return (
    <div className="sidebarsub">
      <p className="sidebarsub-title">Unassigned team leaders</p>
      <p className="sidebarsub-item" onClick={selectUnassignLeaderHandler}>
        Bock Irene
      </p>
      <p className="sidebarsub-item" onClick={selectUnassignLeaderHandler}>
        Zbinden Sonja
      </p>
      <p className="sidebarsub-item" onClick={selectUnassignLeaderHandler}>
        Binder Ingo
      </p>
      <p className="sidebarsub-item" onClick={selectUnassignLeaderHandler}>
        Bock Irene
      </p>
      <p className="sidebarsub-item" onClick={selectUnassignLeaderHandler}>
        Zbinden Sonja
      </p>
      <p className="sidebarsub-item" onClick={selectUnassignLeaderHandler}>
        Binder Ingo
      </p>
      <p className="sidebarsub-item" onClick={selectUnassignLeaderHandler}>
        Bock Irene
      </p>
      <p className="sidebarsub-item" onClick={selectUnassignLeaderHandler}>
        Zbinden Sonja
      </p>
      <p className="sidebarsub-item" onClick={selectUnassignLeaderHandler}>
        Bock Irene
      </p>
    </div>
  );
};

export default TeamsSub;
