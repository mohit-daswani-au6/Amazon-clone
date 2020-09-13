export const initialState = {
  basket: [],
  user: null,
};
// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, payload],
      };
    case "REMOVE_FROM_BASKET":
      // return{
      //     ...state,basket:[...state.basket.filter(item=>item.id !==payload)]
      // }
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === payload
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove prodduct {id:${payload}} as its not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: payload,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
