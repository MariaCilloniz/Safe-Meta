import "./FilterWords.scss";
import { useState } from "react";

function FilterWords() {
  const [keywords, setKeywords] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addKeyword = () => {
    if (inputValue) {
      setKeywords([...keywords, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div className="filter-words">
      <div className="filter-words__title-container">
        <h2 className="filter-words__title">Filter Words</h2>
        <button className="filter-words__add-button" onClick={addKeyword}>
          Add
        </button>
      </div>
      <div className="filter-words__input-container">
        <textarea
          placeholder="Enter keywords related to content you would like to restrict..."
          className="filter-words__input"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></textarea>
      </div>
      <div className="filter-words__tags-container">
        {keywords.map((keyword, index) => (
          <div key={index} className="filter-words__tag">
            <p>{keyword}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterWords;
