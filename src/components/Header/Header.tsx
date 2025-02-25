import { useLayoutEffect, useState } from "react";
import "./Header.scss";

import logo from "./../../assets/img/logo_clear.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useLayoutEffect(() => {
    scrollToTop();
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useLayoutEffect(() => {
    const storedMenuState = localStorage.getItem("isMenuOpen");
    if (storedMenuState === "true") {
      setIsMenuOpen(true);
    }
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem("isMenuOpen", isMenuOpen.toString());
  }, [isMenuOpen]);

  const handleBurgerClick = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setActiveLink(location.pathname);
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleCloseMenu = () => {
    setIsAnimating(true);
    setIsMenuOpen(false);
  };

  const handleBackdropClick = () => {
    handleCloseMenu();
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__box">
          <div
            className={`header__burger ${isMenuOpen ? "active" : ""}`}
            onClick={handleBurgerClick}
          >
            <span></span>
          </div>
          <div
            className="header__logo"
            onClick={() => {
              handleLinkClick("/");
              handleCloseMenu();
              scrollToTop();
            }}
          >
            <Link to="/">
              <img src={logo} alt="Logo" />
              <span>Федерация спортивного метания ножа г. Москва</span>
            </Link>
          </div>
          <ul
            className={`header__menu ${isMenuOpen ? "active" : ""} ${
              isAnimating ? "animating" : ""
            }`}
          >
            <div
              className="header__logo-mobile"
              onClick={() => {
                handleLinkClick("/");
                handleCloseMenu();
                scrollToTop();
              }}
            >
              <img src={logo} alt="Logo" />
            </div>
            <li className="header__menu-item">
              <Link
                to="/"
                onClick={() => {
                  handleLinkClick("/");
                  handleCloseMenu();
                }}
                className={`${activeLink === "/" ? "active" : ""} `}
              >
                Главная
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="/news"
                onClick={() => {
                  handleLinkClick("/news");
                  handleCloseMenu();
                }}
                className={
                  location.pathname.startsWith("/news") ? "active" : ""
                }
              >
                Новости
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="/competitions"
                onClick={() => {
                  handleLinkClick("/competitions");
                  handleCloseMenu();
                }}
                className={
                  location.pathname.startsWith("/competitions") ? "active" : ""
                }
              >
                Соревнования
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                to="/federation"
                onClick={() => {
                  handleLinkClick("/federation");
                  handleCloseMenu();
                }}
                className={
                  location.pathname.startsWith("/federation") ? "active" : ""
                }
              >
                Федерация
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to="/boba">Главная</Link>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="header__backdrop" onClick={handleBackdropClick}></div>
      )}
    </div>
  );
}
