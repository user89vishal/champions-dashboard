import * as actions from "../actionTypes";

export function saveList(data) {
  return { type: actions.SAVE_DATA, value: data };
}

export function addToCart(id) {
  return { type: actions.ADD_TO_CART, value: id };
}
