import * as actions from "../actionTypes";

const initialState = {
  championsList: [],
  cartItems: [],
};

function reducer(state = initialState, action) {
  console.log("In Reducer");
  console.log("Action Type: ", action.type, "Value: ", action.value);

  switch (action.type) {
    case actions.SAVE_DATA:
      return {
        ...state,
        championsList: action.value,
      };
    case actions.ADD_TO_CART:
      let result = 0;
      const isItemAdded = state.cartItems.filter(
        (item) => item.id === action.value
      );
      if (isItemAdded.length === 0) {
        result = state.championsList.filter(
          (champ) => champ.id === action.value
        );
      }
      return {
        ...state,
        cartItems:
          isItemAdded.length === 0
            ? [...state.cartItems, result[0]]
            : [...state.cartItems],
      };
    case actions.REMOVE_FROM_CART:

    default:
      return state;
  }
}

export default reducer;
