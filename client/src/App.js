import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import CrowdFunding from "./contracts/CrowdFunding.json";

import ProjectList from "./components/ProjectList.js";
import AddProject from "./components/AddProject.js";
import Navbar from "./components/Navbar.js";

import Web3 from "web3";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      account: '',
      balance: 0,
      contract: null,
      projects: []

    }
  }

  async componentDidMount(){
    await this.loadBlockChainData()
  }
  async loadBlockChainData(){
    const web3 = new Web3("http://127.0.0.1:7545")
    const id = await web3.eth.net.getId()
    const netData = CrowdFunding.networks[id]
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(
      CrowdFunding.abi,
      netData.address
    )
    const result = await contract.methods.getAllProjects().call()
    const balance = await web3.eth.getBalance(accounts[0])

    this.setState({projects: result})
    this.setState({account: accounts[0]})
    this.setState({contract: contract})
    this.setState({balance: balance})
  }

  render(){
    return(
      <div>
        <Navbar>
        </Navbar>

        <Switch>
          <Route path='/list'>
            <ProjectList projects={this.state.projects} contract={this.state.contract}/>
          </Route>

          <Route path='/add-project'>
            <AddProject  contract={this.state.contract} account={this.state.account} />
          </Route>
        </Switch>
      </div>
    )
  }

}

export default App;
