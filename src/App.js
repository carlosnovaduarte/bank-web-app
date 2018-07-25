import React, { Component } from 'react';
import lomLogo from './images/lom.png';
import Menu from'./components/Menu.js';
import Deposit from './components/Deposit.js';
import Withdraw from './components/Withdraw.js';
import Transfer from './components/Transfer.js';
import { Grid, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drawer from 'react-motion-drawer';
import './App.css';
import withWeb3 from './HOCs/withWeb3.js';
import cassiopeia from './ABIs/cassiopeia.json';


class App extends Component {


  state = { page: "" }

  componentDidMount() {
    const MyContract = this.props.web3.eth.contract(cassiopeia.abi);
    const contractInstance = MyContract.at('0xf6330c053c26b65bc7fc4fc05767477de955c284');
    this.contract = contractInstance
  }

  renderContent() {
    const {web3} = this.props;
    if (this.state.page === "deposit") {
      return <Deposit web3={web3} contract={this.contract} />;
    }
    else if (this.state.page === "withdraw") {
      return <Withdraw web3={web3} contract={this.contract} />;
    }
    else if (this.state.page === "transfer") {
      return <Transfer web3={web3} contract={this.contract} />;
    }
  }

  //getOnClickCallback
  setPage = (page) => {
    console.log("called setPage ", page);
    return () => {
      this.setState({ page: page });
      console.log("called callback ", page);
    }
  }
  render() {
    console.log(this.props);
    console.log(this.props.web3);
    return (
      <Grid className="App">
        <header className="App-header">
          <img src={lomLogo} className="App-logo" alt="lomLogo" />
          <h1 className="App-title">Life on Mars</h1>
        </header>

        <Row className="App-intro">
        </Row>
        <Row>
          <Menu setPage={this.setPage} />
        </Row>
        
        <Row>
          {this.renderContent()}
        </Row>

        <Drawer open={true}> 
          <div>
            teste
          </div>
        </Drawer>
      </Grid>
    );
  }
}

export default withWeb3()(App);

