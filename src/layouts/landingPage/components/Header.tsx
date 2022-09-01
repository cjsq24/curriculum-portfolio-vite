import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'src/assets/css/landingPageMenu.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuList = [
  { title: 'Home', url: '/home' },
  { title: 'About Me', url: '/about-me' },
  { title: 'Skills', url: '/skills' },
  { title: 'Portfolio', url: '/portfolio' },
  { title: 'Experience', url: '/experience' },
  { title: 'Contact Me', url: '/contact-me' },
];

const Header = () => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  useEffect(() => {
    const ignoreClickOnMeElement = document.querySelector('.l-menu-header');

    const clickEvent = document.addEventListener('click', (event) => {
      const target = event.target as HTMLInputElement;
      const isClickInsideElement = ignoreClickOnMeElement?.contains(target);
      if (!isClickInsideElement) {
        setToggleMenu(false);
      }
    });
    return clickEvent;
  }, []);

  const onSelectMenu = () => {
    setToggleMenu(false);
  };

  const onChangeToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const setActive = (url: string) => {
    return location.pathname === url ? 'active' : '';
  };

  return (
    <div className="l-menu-header">
      <div className="l-toggle-menu">
        <label htmlFor="responsive-check">
          {!toggleMenu ? (
            <FaBars size={30} color="#fff" style={{ marginTop: 5 }} />
          ) : (
            <FaTimes size={30} color="#fff" style={{ marginTop: 5 }} />
          )}
        </label>
      </div>
      <input
        type="checkbox"
        id="responsive-check"
        onChange={onChangeToggleMenu}
        checked={toggleMenu}
      />
      <nav className="l-menu">
        <ul>
          {menuList.map(({ url, title }, index) => (
            <li key={index} className={setActive(url)}>
              <NavLink to={url} onClick={onSelectMenu}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
