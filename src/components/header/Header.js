import "./Header.css";
import { useDispatch } from "react-redux";

import { uiAction } from "../../store/ui-slice";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <div className="header-color container">
      <div className="column">
        <NavLink to={"/"}>
          <img src="/img/logo.png" alt="site-logo" style={{ width: 60 }} />
        </NavLink>
      </div>
      <div className="column">
        <div>
          <ul>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to={"/shop"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Shop
            </NavLink>
            <NavLink
              to={"/auth?mode=login"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>
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
