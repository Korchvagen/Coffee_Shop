import { ReactComponent as CoffeeBeans } from '../assets/icons/coffee_beans_black.svg';
import '../styles/decoration.scss';

function Decoration() {
  return (
    <div className="decoration">
      <div className="decoration__line"></div>
      <CoffeeBeans className="decoration__img"/>
      <div className="decoration__line"></div>
    </div>

  );
}

export default Decoration;