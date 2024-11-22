import "./styletest.scss";


function styletest() {
  return (
  <>
   <div className="app-container">
      {/* Headline 1 - Strong */}
      <h1 className="headline1-strong">Headline 1 - Strong</h1>

      {/* Headline 2 */}
      <h2 className="headline2">Headline 2</h2>

      {/* Headline 3 - Strong */}
      <h3 className="headline3-strong">Headline 3 - Strong</h3>

      {/* Body 1 */}
      <p className="body1">This is Body 1 text.</p>

      {/* Body 2 - Strong */}
      <p className="body2-strong">This is Body 2 - Strong text.</p>

      {/* Primary Button */}
      <button className="primary-button">Primary Button</button>

      {/* Card */}
      <div className="card">
        <h3 className="headline3">Card Title</h3>
        <p className="body1">This is some content inside the card.</p>
      </div>
    </div>
  </>
  )
}

export default styletest;
