import Header from "./components/header/Header";
import Notification from "./components/cart/Notification";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { sendCartData, getCartData } from "./store/cart-data";

let showNotyFlag = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  const cartdata = useSelector((state) => {
    return state.cart;
  });
  console.log(cartdata);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  // dispatch(getCartData());

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
    <div>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header></Header>
      {showCart && <Cart />}
      <Product />
      <Footer />
    </div>
  );
}

export default App;
