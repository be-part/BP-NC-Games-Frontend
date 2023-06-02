import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/" id="NavHome" className="NavOption">Home</Link>
      <Link to="/reviews" id="NavAllReviews" className="NavOption">All Reviews</Link>
      <Link to="/categories" id="NavReviewCategories" className="NavOption">Review Categories</Link>
      <Link to="/signin" id="NavSelectUser" className="NavOption">Select User</Link>
    </nav>
  );
}
export default Nav;