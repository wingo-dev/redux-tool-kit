import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://react-http-a83c2-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <div>
      <Header></Header>
      {showCart && <Cart />}
      <Product />
      <Footer />
    </div>
  );
}

export default App;
