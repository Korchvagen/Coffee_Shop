import Menu from "./Menu";
import '../styles/header.scss';

function Header() {
  return (
    <header className="header">
      <Menu isWhite={true}/>
    </header>
  );
}

export default Header;