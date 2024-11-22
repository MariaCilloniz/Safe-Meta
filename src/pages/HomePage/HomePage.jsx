import React from "react";
import ParentalControls from "../../components/ParentalControls/ParentalControls";
import TrustMetrics from "../../components/TrustMetrics/TrustMetrics";
import InteractionLogs from "../../components/InteractionLogs/InteractionLogs";

import "./HomePage.scss";
function HomePage() {
  return (
    <div>
      <div className="container-one">
        <InteractionLogs />
        <TrustMetrics />
      </div>
      <div className="container-two">
        {/* <ParentTips />
        <FilterWords /> */}
        <ParentalControls />
      </div>
    </div>
  );
}

export default HomePage;;
