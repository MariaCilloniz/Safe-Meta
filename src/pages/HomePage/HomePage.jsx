import "./HomePage.scss";
import ParentalTips from "../../components/ParentalTips/ParentalTips";
import TrustMetrics from "../../components/TrustMetrics/TrustMetrics";
import InteractionLogs from "../../components/InteractionLogs/InteractionLogs";
import ParentalControls from "../../components/ParentalControls/ParentalControls";

import "./HomePage.scss";
function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <div className="home-page__left-container">
          <InteractionLogs />
          <TrustMetrics />
        </div>
        <div className="home-page__right-container">
          <ParentalTips />
          <ParentalControls />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
