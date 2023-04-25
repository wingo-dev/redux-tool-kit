import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import "./ProductItems.css";

const ProductItems = (props) => {
  const { id, image, name, description, price } = props.product;
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        name,
      })
    );
  };

  return (
    <li>
      <div className="product-item">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>${price.toFixed(2)}</h3>
        <button onClick={addHandler}>Add Cart</button>
      </div>
    </li>
  );
};

export default ProductItems;
