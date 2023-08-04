import React from "react";
import mealsImage from "./../../Assets/meals.jpg";
import classes from "./Header.module.css";
import { CartButton } from "./CartButton";
export const Header = () => {
  return (
    <>
      <header id="header" className={classes.header}>
        <h1> Food order App </h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]} id="hero">
        <img src={mealsImage} alt="mealsImage" />
      </div>
    </>
  );
};
