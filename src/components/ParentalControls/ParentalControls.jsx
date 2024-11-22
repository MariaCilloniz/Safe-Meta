import { useState } from "react";
import "./ParentalControls.scss";

function ParentalControls() {
  const [restrictions, setRestrictions] = useState({
    reels: false,
    search: false,
    suggestedProfiles: false,
  });

  const displayNames = {
    reels: "Reels",
    search: "Search",
    suggestedProfiles: "Suggested Profiles",
  };

  function toggleRestrictions(restriction) {
    setRestrictions((prevState) => ({
      ...prevState,
      [restriction]: !prevState[restriction],
    }));
  }
  return (
    <div className="parental-toggles">
      <div className="parental-toggles__title-container">
        <h2 className="parental-toggles__title">Access Preferences</h2>
        <p className="parental-toggles__description">
          Turn off AI suggested content in...
        </p>
      </div>
      <div>
        {Object.keys(restrictions).map((restriction) => (
          <div key={restriction} className="restriction-container">
            <p className="restriction-text">{displayNames[restriction]}</p>
            <label htmlFor={restriction} className="checkbox-wrapper">
              <input
                type="checkbox"
                id={restriction}
                checked={restrictions[restriction]}
                onChange={() => toggleRestrictions(restriction)}
              />
              <span className="custom-checkbox"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParentalControls;
