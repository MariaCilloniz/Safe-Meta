import { useState } from "react";
import "./ParentalControls.scss";

function ParentalControls() {
  const [restrictions, setRestrictions] = useState({
    reels: false,
    search: false,
    suggestedProfiles: false,
  });

  const [selectedApp, setSelectedApp] = useState("facebook");
  const apps = ["Facebook", "Instagram", "WhatsApp"];

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
        <p>Turn off AI suggested content in...</p>
      </div>
      <div>
        {Object.keys(restrictions).map((restriction) => (
          <div key={restriction} className="restriction-container">
            <label htmlFor="restriction">
              {restriction.charAt(0).toUpperCase() + restriction.slice(1)}
            </label>
            <input
              type="checkbox"
              id="restriction"
              checked={restrictions[restriction]}
              onChange={() => toggleRestrictions(restriction)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParentalControls;
