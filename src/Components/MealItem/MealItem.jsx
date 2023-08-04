import React from "react";
import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";
export const MealItem = ({props}) => {
    const { description, id, name, price } = props;
  return (
    <li id={id} className={classes.meal}>
      <div id="meal-data">
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <MealItemForm></MealItemForm>
    </li>
  );
};
