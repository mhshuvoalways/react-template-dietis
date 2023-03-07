import React from "react";
import HeaderSidebar from "../components/HeaderSidebar";
import ProtocolScheduleBody from "../components/protocol/ProtocolScheduleBody";
import ProtocolScheduleTop from "../components/protocol/ProtocolScheduleTop";
import ProtocolSidebarSub from "../components/protocol/ProtocolSidebarSub";
import ProtocolChat from "../components/protocol/ProtocolChat";
import ProtocolChart from "../components/protocol/ProtocolChart";

const Infochannel: React.FC = () => {
  return (
    <div>
      <HeaderSidebar headerMenuShow={false}>
        <div className="process-page-body-container">
          <ProtocolSidebarSub />
          <div className="sheduleteam container">
            <ProtocolScheduleTop />
            <div className="protocolschedulebody">
              <ProtocolScheduleBody />
              <div className="protocolschedulebody-chat-chart">
                <ProtocolChat />
                <ProtocolChart />
              </div>
            </div>
          </div>
        </div>
      </HeaderSidebar>
    </div>
  );
};

export default Infochannel;
