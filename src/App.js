import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY })
                            .base(process.env.REACT_APP_AIRTABLE_BASE);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { boothName: "loading ... " };
    this.getVendorName = this.getVendorName.bind(this);
  }

  getVendorName() {
    base('Vendors').find('recqBFqpY2GFpaI5h').then(record => {
      this.setState({ boothName: record.fields["Booth Name"] });
      return record;
    }).catch(err => {
      // Handle error.
    });
  }

  componentDidMount() {
     this.getVendorName();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>{this.state.boothName}</h3>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
