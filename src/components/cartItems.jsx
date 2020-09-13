import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./card";
import { removeFromCart } from "../redux/action/action";

const CartItem = (props) => {
  let cartItemsList = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItemsList.length === 0) {
      props.history.replace({
        pathname: "/",
      });
    }
  }, [cartItemsList]);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return cartItemsList.map((cartItem) => (
    <Card key={cartItem.id} championData={cartItem} onDelete={handleDelete} />
  ));
};

export default CartItem;
