import React from "react";
import { DUMMY_MEALS } from "./AvailableMeals";
import classes from "./AvailableMeals.module.css";
import { Card } from "../UI/Card";
import { MealItem } from "../MealItem/MealItem";
export const Meals = () => {
  const meals = DUMMY_MEALS;

  return (
    <Card className={classes.meals}>
      <ul>
        {meals.map((meal) => (
          <MealItem key={meal.id} props={meal}></MealItem>
        ))}
      </ul>
    </Card>
  );
};
