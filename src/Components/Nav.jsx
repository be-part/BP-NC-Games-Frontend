import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/" className="NavOption">Home</Link>
      <Link to="/reviews" className="NavOption">All Reviews</Link>
      <Link to="/signin" className="NavOption">Select User</Link>
    </nav>
  );
}
export default Nav;