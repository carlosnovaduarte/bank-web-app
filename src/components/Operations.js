import React, { Component, Fragment } from 'react';
import Button from './Button.js'

class Operations extends Component {
  depositHandler() { 
    alert("You have successfully deposited money");
  }

  withdrawHandler() {
    alert("You have withdrawn money.");
  }

  transferHandler() {
    alert("You transfered money.");
  }

  listTransfers() {
    return (
      <Fragment>
      <h1> Carlos -> Ana </h1>
      <h1> Eduardo -> Filipa </h1>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        <Button text="Deposit" clickHandler={ this.depositHandler }/>
        <Button text="Withdraw" clickHandler={ this.withdrawHandler }/>
        <Button text="Transfer" clickHandler={ this.transferHandler }/>
        <p>
          <Button text="List transfers" clickHandler={ this.listTransfers }/>
        </p>
      </Fragment>
    );
  }
}

export default Operations;

