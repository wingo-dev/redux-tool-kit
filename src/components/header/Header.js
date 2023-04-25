import "./Header.css";
import { useDispatch } from "react-redux";

import { uiAction } from "../../store/ui-slice";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
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
          Cart {totalQuantity}
        </button>
      </div>
    </div>
  );
}

export default Header;
