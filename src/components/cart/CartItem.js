import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, name, totalPrice, price, quantity } = props.cart;
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        name,
      })
    );
  };

  const removeCart = () => {
    // console.log(props.cart);
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>${price.toFixed(2)}</td>
          <td>
            <div className="quantity">
              <button className="quantity-btn" onClick={removeCart}>
                -
              </button>
              <div className="quantity-input">{quantity}</div>
              <button className="quantity-btn" onClick={addCart}>
                +
              </button>
            </div>
          </td>
          <td>${totalPrice.toFixed(2)}</td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItem;
