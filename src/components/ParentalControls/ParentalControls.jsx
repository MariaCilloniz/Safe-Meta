import { useState } from "react";

function ParentalControls() {
  const [restrictions, setRestrictions] = useState({
    reels: false,
    search: false,
    suggestedProfiles: false,
  });

  function toggleRestrictions(restriction) {
    setRestrictions((prevState) => ({
      ...prevState,
      [restriction]: !prevState[restriction],
    }));
  }
  return (
    <div>
      <h2 className="parental-controls-toggles__title">Access Preferences</h2>
      <div>
        {Object.keys(restrictions).map((restriction) => (
          <div key={restriction}>
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
