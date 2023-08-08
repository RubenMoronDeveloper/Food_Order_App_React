import React from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/Carticon";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

export const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curretNumber, item) => {
    return curretNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
