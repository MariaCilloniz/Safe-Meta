import React from "react";
import ParentalControls from "../../components/ParentalControls/ParentalControls";
import TrustMetrics from "../../components/TrustMetrics/TrustMetrics";

function HomePage() {
  return (
    <div>
      <TrustMetrics />
      <ParentalControls />
    </div>
  );
}

export default HomePage;
