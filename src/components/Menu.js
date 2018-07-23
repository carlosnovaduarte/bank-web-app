import React, { Component, Fragment } from 'react';
import Deposit from './Deposit.js';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Menu extends Component {
  depositHandler() { 
    return <Deposit/>;
  }

  withdrawHandler() {
    alert("You have withdrawn money.");
  }

  transferHandler() {
    alert("You transfered money.");
  }

  render() {
    return (
      <Fragment>
        <Col md={1}>
          <Button onClick={ this.props.setPage("deposit") }> 
            Deposit 
          </Button>
        </Col>
        <Col md={1}>  
          <Button onClick={ this.props.setPage("withdraw") }> 
           Withdraw 
          </Button>
        </Col>

        <Col md={1}>
          <Button onClick={ this.props.setPage("transfer") }> 
           Transfer 
          </Button>
        </Col>

      </Fragment>
    );
  }
}

export default Menu;

