import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const menuList = [
  { title: 'Home', url: '/home' },
  { title: 'About Me', url: '/about-me' },
  { title: 'Skills', url: '/skills' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Experience', url: '/experience' },
  { title: 'Contact Me', url: '/contact-me' },
];

type TProps = {
  setToggleMenu: (value: boolean) => void;
};

const Menu = ({ setToggleMenu }: TProps) => {
  const location = useLocation();

  const setActive = (url: string) => {
    return location.pathname === url ? 'active' : '';
  };

  useEffect(() => {
    handleIndicator(location.pathname);
  }, [location.pathname]);

  const handleIndicator = (pathname: string) => {
    setWidthToIndicator(urlToId(pathname === '/' ? '/home' : pathname));
    moveIndicator(pathname);
  };

  const moveIndicator = (pathname: string) => {
    const indexToMove = menuList.findIndex((menu) => menu.url === pathname);
    let totalToMove = 0;
    for (let i = 0; i < indexToMove; i++) {
      const menuOption = document.querySelector(
        `#li-menu-${urlToId(menuList[i].url)}`
      ) as HTMLElement;
      totalToMove += menuOption.offsetWidth;
    }
    const indicator = document.querySelector(
      '.l-menu-indicator'
    ) as HTMLElement;
    indicator.style.transform = `translateX(${totalToMove}px)`;
  };

  const setWidthToIndicator = (id: string) => {
    const menuOption = document.querySelector(`#li-menu-${id}`) as HTMLElement;
    const indicator = document.querySelector(
      '.l-menu-indicator'
    ) as HTMLElement;
    indicator.style.width = `${menuOption.offsetWidth.toString()}px`;
  };

  const urlToId = (url: string) => url.replace('/', '');

  return (
    <nav className="l-menu">
      <ul>
        {menuList.map(({ url, title }, index) => (
          <li
            key={index}
            id={`li-menu-${urlToId(url)}`}
            className={setActive(url)}
          >
            <NavLink to={url} onClick={() => setToggleMenu(false)}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <span className="l-menu-indicator"></span>
    </nav>
  );
};

export default Menu;
