import React from "react";
import TrustMetrics from "../../components/TrustMetrics/TrustMetrics";
import FilterWords from "../../components/FilterWords/FilterWords";

function HomePage() {
  return (
    <div>
      <TrustMetrics />
      {/* <Parental-Controls /> */}
      <FilterWords />
    </div>
  );
}

export default HomePage;
