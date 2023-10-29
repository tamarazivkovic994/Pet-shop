import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      console.log(existingItem);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItem.push({ ...newItem, quantity: 1 });
      }
    },
    toggleCart(state, action) {
      state.isCartOpen = action.payload;
    },
    incrementItem(state, action) {
      const id = action.payload;

      state.d = state.d.map((elem) => {
        if (id === elem.id) {
          elem.quantity++;
        }
        return elem;
      });
    },
    decrementItem(state, action) {
      const id = action.payload;

      state.d = state.cartItem.map((elem) => {
        if (id === elem.id) {
          if (elem.quantity > 1) elem.quantity--;
        }
        return elem;
      });
    },
    deleteItem(state, action) {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((elem) => elem.id !== id);
    },
    deleteAll(state, action) {
      state.cartItem = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addItem,
  toggleCart,
  incrementItem,
  decrementItem,
  deleteAll,
  deleteItem,
} = cartSlice.actions;
