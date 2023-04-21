import "./Header.css";
import { useDispatch } from "react-redux";

import { uiAction } from "../../store/ui-slice";

function Header() {
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <div className="header-color container">
      <div className="column">
        <img src="/img/logo.png" alt="site-logo" style={{ width: 60 }} />
      </div>
      <div className="column">
        <div>menu</div>
      </div>
      <div className="column">
        <button className="cart-button" onClick={cartHandler}>
          Cart 1
        </button>
      </div>
    </div>
  );
}

export default Header;
