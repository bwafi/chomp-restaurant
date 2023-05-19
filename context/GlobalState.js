'use client';
import { createContext, useContext, useReducer } from 'react';
import products from '../utils/products.json';

const initialState = {
  products: products,
  cart: [],
};

const ProductReducer = (state, action) => {
  console.log(state.product);
  switch (action.type) {
    case 'ADD_TO_CART':
      const { burgers, sides, drinks } = state.products;
      const itemAdd =
        burgers.find((prod) => prod.id === action.payload.id) ||
        sides.find((prod) => prod.id === action.payload.id) ||
        drinks.find((prod) => prod.id === action.payload.id);
      const existingItem = state.cart.find((existing) => existing.id === itemAdd.id);
      return {
        ...state,
        cart: existingItem
          ? state.cart.map((item) => (item.id === itemAdd.id ? { ...item, quantity: item.quantity + 1 } : item))
          : [...state.cart, { ...itemAdd, quantity: 1 }],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const ProductContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  function addToCart(itemId) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: itemId,
      },
    });
  }

  function removeFromCart(itemId) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  }

  console.log(state.cart);

  return (
    <GlobalContext.Provider value={{ products: state.products, cart: state.cart, addToCart, removeFromCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
