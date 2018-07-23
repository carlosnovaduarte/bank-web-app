import Web3 from 'web3'
import React, { Component } from 'react'

const NoMetamask = () => (<div>Please install MetaMask</div>);
const NoAccount = () => (<div>Please add an account</div>);

export default (
  NoMetamaskComponent = NoMetamask,
  NoAccountComponent = NoAccount
) => (Child) => class withWeb3 extends Component {
  state = {
    web3: null,
    accounts: [],
  }

  componentDidMount () {
    if (typeof window.web3 !== 'undefined') {
      const web3 = new Web3(window.web3.currentProvider)
      this.setState({ web3 })
      if (web3.eth.accounts.length === 0) {
        web3.eth.getAccounts((err, accounts) => {
          if (err) {
            console.error('oops', err)
          }
          this.setState({ accounts })
          web3.eth.defaultAccount = accounts[0]
        })
      } else {
        this.setState({ accounts: web3.eth.accounts })
        web3.eth.defaultAccount = web3.eth.accounts[0]
      }
    }
  }

  render () {
    if (this.state.web3) {
      if (this.state.accounts.length > 0) {
        return (
          <Child
            {...this.props}
            web3={this.state.web3}
          />
        )
      } else {
        return <NoAccountComponent />
      }
    }
    return <NoMetamaskComponent />
  }
}
