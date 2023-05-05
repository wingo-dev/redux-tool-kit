import Header from "./components/header/Header";
import Notification from "./components/cart/Notification";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiAction } from "./store/ui-slice";

let showNotyFlag = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiAction.showNotification({
          status: "pending",
          title: "pending",
          message: "cart data is pending....",
        })
      );
      const response = await fetch(
        "https://react-http-a83c2-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data error!");
      }
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "success",
          message: "Successfully sent cart data....",
        })
      );
    };

    if (showNotyFlag) {
      showNotyFlag = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "error",
          message: "cart data sending error....",
        })
      );
    });
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
