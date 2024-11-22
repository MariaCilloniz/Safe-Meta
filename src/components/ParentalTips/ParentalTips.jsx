import "./ParentalTips.scss";
import tipsIcon from "../../assets/images/tips-icon.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ParentalTips() {
  const [tips, setTips] = useState([]);
  const [randomTip, setRandomTip] = useState("");
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const getRandomTip = async () => {
    const tips = await axios.get(`${baseUrl}/api/tips`);
    setTips(tips.data);

    const range = Math.floor(Math.random() * (tips.data.length - 1 - 1) + 1);
    await setRandomTip(tips.data[range].tip);
  };

  useEffect(() => {
    getRandomTip();
  }, []);

  return (
    <section className="parental-tips">
      <div className="parental-tips__title">
        <h1 className="parental-tips__title-text">Parental tips</h1>
        <img src={tipsIcon} alt="light bulb icon" />
      </div>
      <p className="parental-tips__tip">{randomTip}</p>
      <Link to="#" className="parental-tips__link">
        More Tips
      </Link>
    </section>
  );
}

export default ParentalTips;
