import "./Cart.css";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";

import { useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(uiAction.toggle());
  };
  const carts = useSelector((state) => {
    return state.cart;
  });

  console.log(carts);
  return (
    <>
      <div className="modal fade" id="shoppingCartModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Shopping Cart</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={cartHandler}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product 1</td>
                    <td>$10.00</td>
                    <td>1</td>
                    <td>$10.00</td>
                  </tr>
                  <tr>
                    <td>Product 2</td>
                    <td>$20.00</td>
                    <td>2</td>
                    <td>$40.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">Total:</td>
                    <td>$50.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
