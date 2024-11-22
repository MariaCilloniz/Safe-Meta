import "./HomePage.scss";
import ParentalTips from "../../components/ParentalTips/ParentalTips";
import TrustMetrics from "../../components/TrustMetrics/TrustMetrics";
import InteractionLogs from "../../components/InteractionLogs/InteractionLogs";

function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <TrustMetrics />
        <ParentalTips />
        <InteractionLogs />
      </div>
    </main>
  );
}

export default HomePage;
