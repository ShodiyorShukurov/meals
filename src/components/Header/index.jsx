import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-becdd635.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__wrapper">
          <Link to="/home">
            <img src={logo} alt="Meals img logo" width="90" />
          </Link>

          <nav className="nav">
            <ul className="site-header__list">
              <li className="site-header__item">
                <NavLink className="site-header__link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="site-header__item">
                <NavLink className="site-header__link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="site-header__item">
                <NavLink className="site-header__link" to="/contacts">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
