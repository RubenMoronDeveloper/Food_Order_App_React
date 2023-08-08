import React from "react";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import mealsImage from "./../../Assets/meals.jpg";
import classes from "./Header.module.css";
import { CartButton } from "./CartButton";
export const Header = (props) => {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curretNumber, item)=>{
    return curretNumber + item.amount
  }, 0)
  return (
    <>
      <header id="header" className={classes.header}>
        <h1> Food order App </h1>
        <CartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]} id="hero">
        <img src={mealsImage} alt="mealsImage" />
      </div>
    </>
  );
};
