import { uiAction } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "pending",
        message: "cart data is pending....",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-a83c2-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data error!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "success",
          message: "Successfully sent cart data....",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "error",
          message: "cart data sending error....",
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const cartData = async () => {
      const response = await fetch(
        "https://react-http-a83c2-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("getting cart data from Firebase failed");
      }
      const data = response.json();
      return data;
    };
    try {
      const cart = await cartData();
      dispatch(
        cartActions.replaceCart({
          items: cart.items || [],
          totalQuantity: cart.totalQuantity,
          totalAmount: cart.totalAmount,
        })
      );
      //   console.log(cart);
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "error",
          message: "cart data sending error....",
        })
      );
    }
  };
};
