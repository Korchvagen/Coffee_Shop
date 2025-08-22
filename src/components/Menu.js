import {ReactComponent as Logo} from '../assets/icons/logo.svg';
import '../styles/menu.scss';

function Menu() {
  return (
    <div className="menu">
      <Logo className="menu__logo" />
      <nav className='menu__nav'>
        <ul className="menu__list">
          <li><a className="menu__link" href="#">Coffee house</a></li>
          <li><a className="menu__link" href="#">Our coffee</a></li>
          <li><a className="menu__link" href="#">For your pleasure</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;