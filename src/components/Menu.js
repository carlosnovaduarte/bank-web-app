import React, { Component, Fragment } from 'react';
import Deposit from './Deposit.js';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Row>
          <Col md={4}>
            <button type="button" className="btn btn-danger btn-lg" onClick={ this.props.setPage("deposit") }> 
              Deposit 
            </button>
          </Col>
          <Col md={4}>  
            <button type="button" className="btn btn-danger btn-lg" onClick={ this.props.setPage("withdraw") }> 
             Withdraw 
            </button>
          </Col>

          <Col md={4}>
            <button type="button" className="btn btn-danger btn-lg" onClick={ this.props.setPage("transfer") }> 
             Transfer 
            </button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Menu;

