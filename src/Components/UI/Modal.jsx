import React from "react";
import classes from "./Modal.module.css";
import  ReactDOM  from "react-dom";

const BackDrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalNode = document.getElementById("overlays");
console.log({portalNode})

export const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalNode)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        portalNode
      )}
    </>
  );
};
