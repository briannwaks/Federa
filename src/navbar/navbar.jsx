import './navbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'






const Navbar = () => {


  return (

    <nav className="navbar navbar-expand-lg fixed-top py-3">
      <div className="container-fluid">
        <Link className="navbar-brand bg-white px-5 rounded" to="/"><img src="/federalogo2.png" style={{ height: '40px', width: 'auto' }} alt="Federa" /></Link>
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
        <div className="collapse navbar-collapse   " id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex gap-5">
            <li className="nav-item ">
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
          <Link id='login' className="btn text-white d-flex gap-2 align-items-center" to="/login">Login
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </nav>

  );
};


export default Navbar;
