const initialState = {
  products: [],
  isAuth: false,

  cart: {
    price: 0,
    amount: 0,
    positions: [],
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuth: true };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        cart: {
          price: 0,
          amount: 0,
          positions: [],
        },
      };
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          price: state.cart.price + Number(action.payload.price),
          amount: state.cart.amount + 1,
          positions: [...state.cart.positions, action.payload.product],
        },
      };
    case "DELETE_TO_CART":
      return {
        ...state,
        cart: {
          price: state.cart.price - Number(action.payload.price),
          amount: state.cart.amount - 1,
          positions: [
            ...state.cart.positions.slice(0, action.payload.index),
            ...state.cart.positions.slice(action.payload.index + 1),
          ],
        },
      };
    default:
      return state;
  }
};
