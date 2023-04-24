import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import "./ProductItems.css";

const ProductItems = (props) => {
  const dispatch = useDispatch();
  const addHandler = (product) => {
    dispatch(
      cartActions.addItemToCart({
        id: product.id,
        price: product.price,
        title: product.name,
      })
    );
  };

  return (
    <div className="product-list">
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            <div className="product-item">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>${product.price.toFixed(2)}</h3>
              <button onClick={addHandler(product)}>Add Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductItems;
