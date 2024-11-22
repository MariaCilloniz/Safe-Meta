import "./HomePage.scss";
import ParentalTips from "../../components/ParentalTips/ParentalTips";
import TrustMetrics from "../../components/TrustMetrics/TrustMetrics";

function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <TrustMetrics />
        <ParentalTips />
      </div>
    </main>
  );
}

export default HomePage;
