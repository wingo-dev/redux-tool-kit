import "./Header.css";
import { useDispatch } from "react-redux";

import { uiAction } from "../../store/ui-slice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <div className="header-color container">
      <div className="column">
        <Link to={"/"}>
          <img src="/img/logo.png" alt="site-logo" style={{ width: 60 }} />
        </Link>
      </div>
      <div className="column">
        <div>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
          </ul>
        </div>
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
