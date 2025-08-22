import Menu from "./Menu";
import Decoration from "./Decoration";
import '../styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Menu isWhite={false}/>
        <Decoration/>
      </div>
    </footer>
  );
}

export default Footer;