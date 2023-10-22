import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const id = action.payload.id;
      const newItem = state.cartItems.find((elem) => elem.id === id);

      if (newItem) {
        newItem.quantity++;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    toggleCart(state, action) {
      state.isCartOpen = action.payload;
    },
    incrementItem(state, action) {
      const id = action.payload;

      state.cartItems = state.cartItems.map((elem) => {
        if (id === elem.id) {
          elem.quantity++;
        }
        return elem;
      });
    },
    decrementItem(state, action) {
      const id = action.payload;

      state.cartItems = state.cartItems.map((elem) => {
        if (id === elem.id) {
          if (elem.quantity > 1) elem.quantity--;
        }
        return elem;
      });
    },
    deleteItem(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((elem) => elem.id != id);
    },
    deleteAll(state, action) {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  toggleCart,
  incrementItem,
  decrementItem,
  deleteAll,
  deleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
