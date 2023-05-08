import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalAmount = state.totalAmount + newItem.price;
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;

        state.totalAmount = state.totalAmount + existingItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalAmount = state.totalAmount - existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalQuantity--;
        state.totalAmount = state.totalAmount - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
