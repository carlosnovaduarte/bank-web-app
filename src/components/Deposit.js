import React, { Component, Fragment } from 'react';
import {FormControl, Button, Col} from 'react-bootstrap';
import cassiopeia from '../ABIs/cassiopeia.json';

class Deposit extends Component {
  state = {contract: "", deposit: "", defaultAccount: ""}

  componentDidMount() {
    const MyContract = this.props.web3.eth.contract(cassiopeia.abi);
    const contractInstance = MyContract.at('0xf6330c053c26b65bc7fc4fc05767477de955c284');
    this.setState({ contract: contractInstance, defaultAccount: this.props.web3.eth.accounts[0] });
  }

  confirmDeposit = () => {
    this.state.contract.deposit({ 
      from: this.props.web3.eth.defaultAccount,
      value: this.state.deposit, 
      gasPrice: this.props.web3.toWei(20, 'gwei')
    }, (error, result) => {
       console.log(error, result);
      }
    );
  }

  changeDeposit = (event) => {
    this.setState({ deposit: event.target.value });
  } 

  render() {
    return(
      <Fragment>
      <h1>How much money would you like to deposit?</h1>
      <Col md={11}> 
        <FormControl placeholder="1" value={this.state.deposit} onChange={this.changeDeposit}/>
      </Col>
      <Col md={1}>
        <Button onClick={this.confirmDeposit}>
         Deposit 
        </Button>
      </Col>
      </Fragment>
    );
  } 
}

export default Deposit;

