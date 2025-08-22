import { ReactComponent as LogoWhite } from '../assets/icons/logo_white.svg';
import { ReactComponent as LogoBlack } from '../assets/icons/logo_black.svg';
import '../styles/menu.scss';

function Menu({isWhite}) {
  const linkClassNane = isWhite ? "menu__link" : "menu__link menu__link_black"
  return (
    <div className="menu">
      {isWhite ? <LogoWhite className="menu__logo" /> : <LogoBlack className="menu__logo" />}
      <nav className='menu__nav'>
        <ul className="menu__list">
          <li><a className={linkClassNane} href="#">Coffee house</a></li>
          <li><a className={linkClassNane} href="#">Our coffee</a></li>
          <li><a className={linkClassNane} href="#">For your pleasure</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;