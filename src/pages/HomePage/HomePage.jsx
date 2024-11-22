import "./HomePage.scss";
import ParentalTips from "../../components/ParentalTips/ParentalTips";
import TrustMetrics from "../../components/TrustMetrics/TrustMetrics";
import InteractionLogs from "../../components/InteractionLogs/InteractionLogs";
import ParentalControls from "../../components/ParentalControls/ParentalControls";
import FilterWords from "../../components/FilterWords/FilterWords"

import "./HomePage.scss";
function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <div className="home-page__left-container">
          
          <div className="home-page__top">
          <InteractionLogs />
          </div>

          <div className="home-page__bottom">
          <ParentalTips />
          <FilterWords />
          </div>
        </div>
        
        <div className="home-page__right-container">
        <TrustMetrics />
        <ParentalControls />
        </div>

        <div>
       
       
        </div>
      </div>
    </main>
  );
}

export default HomePage;
