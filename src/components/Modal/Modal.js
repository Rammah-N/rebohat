import React, { Component } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }
  componentDidUpdate() {
    console.log('[Modal] ComponentDidUpdate');
  }
  render() {
    return (
      <>
        <div
          className={[classes.Modal, this.props.show ? classes.open : classes.closed].join(' ')}
        >
          {this.props.children}
        </div>
        <Backdrop
          show={this.props.show}
          hideBackdrop={this.props.hideBackdrop}
        />
      </>
    );
  }
}
export default Modal;
