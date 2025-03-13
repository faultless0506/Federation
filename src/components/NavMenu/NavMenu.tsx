import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './NavMenu.scss';

interface MenuItem {
  id: string;
  label: string;
}

interface NavMenuProps {
  items: MenuItem[];
  offset?: number;
  duration?: number;
  className?: string;
}

const NavMenu: React.FC<NavMenuProps> = ({
  items,
  offset = -80, 
  duration = 500, 
}) => {
  return (
    <nav className={`nav-menu`}>
        <h3>Навигация по странице</h3>
      <div className="nav-menu__list">
        {items.map((item) => (
            <ScrollLink
            key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              {item.label}
            </ScrollLink>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;