import React, { Component, Fragment } from 'react';
import {FormControl, Button, Col} from 'react-bootstrap';
import cassiopeia from '../ABIs/cassiopeia.json';

class Withdraw extends Component {
  state = { contract: "", withdraw: "", defaultAccount: "" }

  componentDidMount() {
    const MyContract = this.props.web3.eth.contract(cassiopeia.abi);
    const contractInstance = MyContract.at('0xf6330c053c26b65bc7fc4fc05767477de955c284');
    this.setState({ contract: contractInstance, defaultAccount: this.props.web3.eth.accounts[0] });
  }

  confirmWithdraw = () => {
    this.state.contract.withdraw(this.state.withdraw, { 
      from: this.props.web3.eth.defaultAccount,
      gasPrice: this.props.web3.toWei(20, 'gwei')
    }, (error, result) => {
       console.log(error, result);
      }
    );
  }

  changeWithdraw = (event) => {
    this.setState({ withdraw: event.target.value })
  } 

  render() {
    return(
      <Fragment>
      <h1>How much money would you like to withdraw?</h1>
      <Col md={11}> 
        <FormControl placeholder="1" value={this.state.withdraw} onChange={this.changeWithdraw}/>
      </Col>
      <Col md={1}>
        <Button onClick={this.confirmWithdraw}>
         Withdraw 
        </Button>
      </Col>
      </Fragment>
    );
  } 
}

export default Withdraw;
