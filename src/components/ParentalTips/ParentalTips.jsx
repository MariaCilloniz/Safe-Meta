import "./ParentalTips.scss";
import tipsIcon from "../../assets/images/tips-icon.svg";
import axios from "axios";
import { useEffect, useState } from "react";

function ParentalTips() {
  const [tips, setTips] = useState([]);
  const [randomTip, setRandomTip] = useState("");
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const getTips = async () => {
    try {
      const tips = await axios.get(`${baseUrl}/api/tips`);
      setTips(tips.data);
      setRandomTip(tips.data[0].tip);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    const range = Math.floor(Math.random() * (tips.length - 1 - 1) + 1);
    setRandomTip(tips[range].tip);
  };

  useEffect(() => {
    getTips();
  }, []);

  return (
    <section className="parental-tips">
      <div className="parental-tips__title">
        <h1 className="parental-tips__title-text">Parental tips</h1>
        <img src={tipsIcon} alt="light bulb icon" />
      </div>
      <p className="parental-tips__tip">{randomTip}</p>
      <button onClick={handleClick} className="parental-tips__button">
        More Tips
      </button>
    </section>
  );
}

export default ParentalTips;
