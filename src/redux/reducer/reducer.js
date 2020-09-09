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
      let result = state.championsList.filter(
        (champ) => champ.id === action.value
      );
      return {
        ...state,
        championsList: state.championsList.map((champ) =>
          champ.id === action.value
            ? Object.assign({}, champ, (champ.added_to_cart = true))
            : champ
        ),
        cartItems: state.cartItems.map((item) =>
          item.id === result.id
            ? [...state.cartItems]
            : [...state.cartItems, result[0]]
        ),
      };
    case actions.REMOVE_FROM_CART:

    default:
      return state;
  }
}

export default reducer;
