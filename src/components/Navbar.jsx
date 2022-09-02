import { Link } from 'react-router-dom';

import 'styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-main">
      <h2>Home</h2>
      <nav className="navbar-connect-links-block">
        <Link to="/sign_up" className="navbar-connection-links">
          Sign Up
        </Link>
        <Link to="/login" className="navbar-connection-links">
          Login
        </Link>
        <Link to="/logout" className="navbar-connection-links">
          Logout
        </Link>
      </nav>
    </nav>
  );
}

export default Navbar;
