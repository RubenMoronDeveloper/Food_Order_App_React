import React from 'react'
import classes from './MealItemForm.module.css'
import { Input } from '../UI/Input'

export const MealItemForm = (props) => {
  return (
    <form id="meal-amount" className={classes.form}>
        <Input 
        label="amount"
        input={{
            id:'amount_'+props.id ,
            type: 'number',
            min : '1',
            max: '5',
            step: '1',
            defaultValue: '1' 
        }}
        />        
        <button>+ Add</button>
      </form>
  )
}
