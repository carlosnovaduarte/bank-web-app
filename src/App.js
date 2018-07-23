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

class App extends Component {
  state = { page: "" }
  renderContent() {
    const {web3} = this.props;
    if (this.state.page === "deposit") {
      return <Deposit web3={web3} />;
    }
    else if (this.state.page === "withdraw") {
      return <Withdraw web3={web3} />;
    }
    else if (this.state.page === "transfer") {
      return <Transfer web3={web3} />;
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
    return (
      <Grid className="App">
        <header className="App-header">
          <img src={lomLogo} className="App-logo" alt="lomLogo" />
          <h1 className="App-title">Welcome to the Bank</h1>
        </header>

        <Row className="App-intro">
          What would you like to do?
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

export default App;

