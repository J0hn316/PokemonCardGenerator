import "../Nav/nav.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/cards/create">
        <div>Create Pokemon Card</div>
      </Link>
    </div>
  );
}

export default NavBar;
