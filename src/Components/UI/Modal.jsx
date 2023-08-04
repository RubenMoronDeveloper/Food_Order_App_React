import React, {ReactPortal} from 'react'
import classes from './Modal.module.css'

export const Modal = (props) => {
  return (
    <div className={classes.backdrop}>
        <div className={classes.modal}></div>
    </div>
  )
}
