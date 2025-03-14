import { useLayoutEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

import logo from './../../assets/img/logo_clear.png';
import ButtonTG from '../Buttons/ButtonSocial/ButtonTG';
import ButtonVK from '../Buttons/ButtonSocial/ButtonVK';
import ButtonScrollToTop from '../Buttons/ButtonScrollToTop/ButtonScrollToTop';
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
      behavior: 'smooth',
    });
  };
  useLayoutEffect(() => {
    scrollToTop();
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useLayoutEffect(() => {
    const storedMenuState = localStorage.getItem('isMenuOpen');
    if (storedMenuState === 'true') {
      setIsMenuOpen(true);
    }
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem('isMenuOpen', isMenuOpen.toString());
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
    <header className="header">
      <nav className="container header__box">
        <div
          className={`header__burger ${isMenuOpen ? 'active' : ''}`}
          onClick={handleBurgerClick}
        >
          <span></span>
        </div>
        <ButtonScrollToTop />
        <div
          className="header__logo"
          onClick={() => {
            handleLinkClick('/');
            handleCloseMenu();
            scrollToTop();
          }}
        >
          <Link to="/federation">
            <img src={logo} alt="Logo" />
            <span>Федерация спортивного метания ножа г. Москва</span>
          </Link>
        </div>
        <div className="header__logo-socials">
          <ButtonVK />
          <ButtonTG />
        </div>
        <ul
          className={`header__menu ${isMenuOpen ? 'active' : ''} ${
            isAnimating ? 'animating' : ''
          }`}
        >
          <Link className="header__logo-mobile"
            to="/federation"
            onClick={() => {
              handleLinkClick('/federation');
              handleCloseMenu();
              scrollToTop();
            }}
          >
            <img src={logo} alt="Logo" /></Link>
          <li className="header__menu-item">
            <Link
              to="/"
              onClick={() => {
                handleLinkClick('/');
                handleCloseMenu();
              }}
              className={`${activeLink === '/' ? 'active' : ''} `}
            >
              Главная
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              to="/news"
              onClick={() => {
                handleLinkClick('/news');
                handleCloseMenu();
              }}
              className={location.pathname.startsWith('/news') ? 'active' : ''}
            >
              Новости
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              to="/competitions"
              onClick={() => {
                handleLinkClick('/competitions');
                handleCloseMenu();
              }}
              className={
                location.pathname.startsWith('/competitions') ? 'active' : ''
              }
            >
              Соревнования
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              to="/federation"
              onClick={() => {
                handleLinkClick('/federation');
                handleCloseMenu();
              }}
              className={
                location.pathname.startsWith('/federation') ? 'active' : ''
              }
            >
              Федерация
            </Link>
          </li>

          <li className="header__menu-contacts">
            <div className="header__menu-contacts-social">
              <ButtonVK />
              <ButtonTG />
            </div>
            <Link
              className="header__menu-contacts-mail"
              to="mailto:roofsmn2024@mail.ru"
              target="_blank"
            >
              roofsmn2024@mail.ru
            </Link>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="header__backdrop" onClick={handleBackdropClick}></div>
      )}
    </header>
  );
}
