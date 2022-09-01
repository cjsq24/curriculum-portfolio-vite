import { NavLink } from 'react-router-dom';

type TProps = {
  url: string;
  title: string;
  onSelectMenu: () => void;
  setActive: (url: string) => string;
};

const Menu = ({ url, title, onSelectMenu, setActive }: TProps) => {
  return (
    <li className={setActive(url)}>
      <NavLink to={url} onClick={onSelectMenu}>
        {title}
      </NavLink>
    </li>
  );
};

export default Menu;
