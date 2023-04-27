const CartItem = (props) => {
  const cartItem = props.cart;
  return (
    <>
      <tbody>
        <tr>
          <td>{cartItem.name}</td>
          <td>${cartItem.price}</td>
          <td>{cartItem.quantity}</td>
          <td>${cartItem.totalPrice}</td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItem;
