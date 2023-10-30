import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-becdd635.png";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
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

            <div className="site-header__mobile">
              {open === false ? (
                <button
                  className="btn btn-outline"
                  onClick={() => setOpen(true)}
                >
                  <GiHamburger color="white" fontSize="25px" />
                </button>
              ) : (
                <button className="btn" onClick={() => setOpen(false)}>
                  <MdOutlineRestaurantMenu color="white" fontSize="25px" />
                </button>
              )}
            </div>
          </nav>
        </div>
        {open === false ? (
          ""
        ) : (
          <ul className="site-header__list-mobile">
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
        )}
      </div>
    </header>
  );
};

export default Header;
