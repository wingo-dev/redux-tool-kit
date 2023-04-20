import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

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
