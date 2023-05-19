'use client';
import { createContext, useContext, useEffect, useReducer } from 'react';
import products from '../utils/products.json';

const initialState = {
  products: products,
  cart: [],
};

const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload,
      };

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

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ),
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
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id: itemId },
    });
  }

  function increaseQuantity(itemId) {
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: { id: itemId },
    });
  }

  function decreaseQuantity(itemId) {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: { id: itemId },
    });
  }

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const value = {
    products: state.products,
    cart: state.cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
