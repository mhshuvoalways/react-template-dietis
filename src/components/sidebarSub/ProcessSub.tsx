import React from "react";

const ProcessSub: React.FC = () => {
  return (
    <div className="sidebarsub">
      <div>
        <p className="sidebarsub-title">Positive logs</p>
        <div className="processlogs-items">
          <p className="processLogs-item">Punctual</p>
          <p className="processLogs-item">Abstinent</p>
          <p className="processLogs-item">Behave</p>
          <p className="processLogs-item">medication taken</p>
          <p className="processLogs-item">tbd</p>
          <p className="processLogs-item">tbd</p>
          <p className="processLogs-item">tbd</p>
        </div>
      </div>
      <div>
        <p className="sidebarsub-title">Indicative logs</p>
        <div className="processlogs-items">
          <p className="processLogs-item processlogs-items__indicates">
            too late
          </p>
          <p className="processLogs-item processlogs-items__indicates">
            oversleep
          </p>
          <p className="processLogs-item processlogs-items__indicates">
            Behave
          </p>
          <p className="processLogs-item processlogs-items__indicates">
            relapse
          </p>
          <p className="processLogs-item processlogs-items__indicates">
            Medicine taken late
          </p>
        </div>
      </div>
      <div>
        <p className="sidebarsub-title">Triggering logs</p>
        <div className="processlogs-items">
          <p className="processLogs-item processlogs-items__trigger">
            did not show up
          </p>
          <p className="processLogs-item processlogs-items__trigger">
            Behave
          </p>
          <p className="processLogs-item processlogs-items__trigger">
            2. Relapse
          </p>
          <p className="processLogs-item processlogs-items__trigger">tbd</p>
          <p className="processLogs-item processlogs-items__trigger">tbd</p>
          <p className="processLogs-item processlogs-items__trigger">tbd</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSub;
