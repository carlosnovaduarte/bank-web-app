import React, { Component, Fragment } from 'react';
import {FormControl, Button, Col} from 'react-bootstrap';
import cassiopeia from '../ABIs/cassiopeia.json';



class Transfer extends Component {
  state = { contract: "", transfer: "", defaultAccount: "" }

  
  componentDidMount() {
    const MyContract = this.props.web3.eth.contract(cassiopeia.abi);
    const contractInstance = MyContract.at('0xf6330c053c26b65bc7fc4fc05767477de955c284');
    this.setState({ contract: contractInstance, defaultAccount: this.props.web3.eth.accounts[0] });
  }


  confirmTransfer = () => {
    this.state.contract.transfer({
      from: this.props.web3.eth.defaultAccount,
      value: this.state.transfer,
      gasPrice: this.props.web3.toWei(20, 'gwei')

    }, (error, result) => {
      console.log(error, result);
      }
    );
  }

  changeTransfer = (event) => {
    this.setState({ transfer: event.target.value });
  }


  render() {
    return(
      <Fragment>
      <h1>How much money would you like to transfer?</h1>
      <Col md={11}> 
        <FormControl placeHolder="1" value={this.state.transfer} onChange={this.changeTransfer}/>
      </Col>
      <Col md={1}>
        <Button onClick={this.confirmTransfer}>
         Transfer 
        </Button>
      </Col>
      </Fragment>
    );
  } 
}

export default Transfer;

