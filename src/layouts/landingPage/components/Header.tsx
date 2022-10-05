import { useEffect, useState } from 'react';
import 'src/assets/css/landingPageMenu.css';
import Menu from './Menu';

const Header = () => {
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

  const onChangeToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="l-menu-header">
      <input
        type="checkbox"
        id="responsive-check"
        onChange={onChangeToggleMenu}
        checked={toggleMenu}
      />
      <label htmlFor="responsive-check" className="l-responsive-menu-switch">
        <div className="l-line-one" />
        <div className="l-line-two" />
        <div className="l-line-three" />
      </label>
      <Menu setToggleMenu={setToggleMenu} />
    </div>
  );
};

export default Header;
