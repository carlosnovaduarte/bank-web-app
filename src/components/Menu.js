import React, { Component, Fragment } from 'react';
import Deposit from './Deposit.js';
import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Transfer from './Transfer.js';

class Menu extends Component {
  depositHandler() { 
    return <Deposit/>;
  }

  withdrawHandler() {
    alert("You have withdrawn money.");
  }

  transferHandler() {
    //this.props.setPage("transfer");
    //return <Transfer/>;
  }

  render() {
    return (
      <Fragment>
        <Grid>
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
      </Grid>
      </Fragment>
    );
  }
}

export default Menu;

