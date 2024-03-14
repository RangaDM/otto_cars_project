import React, { useRef, useState } from "react";
import logo from "../../assets/all-images/Logo/oriLogo.svg";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/vehicles",
    display: "Vehicles",
    submenu: [
      {
        path: "/vehicles/cars",
        display: "Cars",
      },
      {
        path: "/vehicles/vans",
        display: "Vans",
      },
      {
        path: "/vehicles/bikes",
        display: "Mortor Bikes",
      },
      {
        path: "/vehicles/cabs",
        display: "Cabs",
      },
      {
        path: "/vehicles/trucks",
        display: "Trucks",
      },
    ],
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "#",
    display: "Rent vehicle",
  },
];

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +94 77 123 4567
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <img src={logo} alt="logo" className=" h-16" />
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Kandy</h4>
                  <h6>Katugasthota, Guhagoda</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
        <div className="navigation__wrapper d-flex align-items-center justify-content-between">
      <span className="mobile__menu">
        <i className="ri-menu-line" onClick={toggleMenu}></i>
      </span>
      <div className="navigation" ref={menuRef}>
        <div className="menu">
          {navLinks.map((item, index) => (
            <div key={index} className="nav__item-wrapper">
              {item.submenu ? (
                <div
                  className="nav__item"
                  onClick={toggleMenu}
                >
                  <span>{item.display}</span><br/>
                  {isSubMenuOpen && (
                    <div className="submenu">
                      {item.submenu.map((subItem, subIndex) => (
                        <NavLink key={subIndex} to={subItem.path}>
                          {subItem.display}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? 'nav__active nav__item' : 'nav__item'
                  }
                >
                  {item.display}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="nav__right">
        <div className="search__box">
          <input type="text" placeholder="Search" />
          <span>
            <i className="ri-search-line"></i>
          </span>
        </div>
      </div>
    </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
