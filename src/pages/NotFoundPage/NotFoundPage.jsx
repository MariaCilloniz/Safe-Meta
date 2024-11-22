import "./NotFoundPage.scss";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <p className="not-found__meta">
          Meta is all about connection, but it seems we've lost this one.
        </p>
        <Link to="/" className="not-found__home-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
export default NotFoundPage;