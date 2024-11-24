
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="../assets/federalogo.png" style={{ height: '40px'}}  alt="Federa" /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/company">Company</Link>
            </li>
          </ul>
          <Link className="btn " to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
