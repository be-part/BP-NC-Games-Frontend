import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/" className="NavOption">Home</Link>
      <Link to="/reviews" className="NavOption">All Reviews</Link>
    </nav>
  );
}
export default Nav;