import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }],
        totalPrice: state.totalPrice + action.payload.price,
        totalItems: state.totalItems + 1,
      };

    case "INCREASE": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice + action.payload.price,
        totalItems: state.totalItems + 1,
      };
    }

    case "DECREASE": {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: Math.max(0, item.qty - 1) }
            : item
        )
        .filter((item) => item.qty > 0);
      return {
        ...state,
        items: updatedItems,
        totalPrice: Math.max(0, state.totalPrice - action.payload.price),
        totalItems: Math.max(0, state.totalItems - 1),
      };
    }

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price,
        totalItems: state.totalItems - 1,
      };

    default:
      return state;
  }
};

function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    totalPrice: 0,
    totalItems: 0,
  });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
