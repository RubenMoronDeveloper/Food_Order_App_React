import React from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../Cart/Carticon";

export const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
