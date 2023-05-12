import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData, getCartData } from "../store/cart-data";
import Cart from "../components/cart/Cart";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Notification from "../components/cart/Notification";

let showNotyFlag = true;
function RootLayouts() {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  // const cartdata = useSelector((state) => {
  //   return state.cart;
  // });

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  useEffect(() => {
    if (showNotyFlag) {
      showNotyFlag = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header />
      {showCart && <Cart />}
      <Outlet />
      <Footer />
    </>
  );
}
export default RootLayouts;
