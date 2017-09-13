import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login.js';
import logo from './logo.svg';
import './App.css';
import Airtable from 'airtable';
import Form from './components/Form/Form';
import { mapColumns } from './utils/mapColumns';

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY })
                            .base(process.env.REACT_APP_AIRTABLE_BASE);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: {} };
    // this.getVendorName = this.getVendorName.bind(this);
    this.getExhibitorInfo = this.getExhibitorInfo.bind(this);
  }

  // getVendorName() {
  //   base('Exhibitors').find('recqBFqpY2GFpaI5h').then(record => {
  //     this.setState({ boothName: record.fields["Booth Name"] });
  //     return record;
  //   }).catch(err => {
  //     // Handle error.
  //   });
  // }

  getExhibitorInfo() {
    let boothName = 'Sheva & Josh 500 Years';
    let phoneNumber = '7813338151';
    let email = 'shevadas@gmail.com';
    let loginFormula = `({Booth Name} = '${boothName}') & ({Phone Number} = '${phoneNumber}') & ({Email Address} = '${email}')`;

    base('Exhibitors').select({
      filterByFormula: loginFormula,
      maxRecords: 1
    }).firstPage((err, records) => {
      if (err) { console.error(err); return; }
      this.setState({ currentUser: mapColumns(records[0].fields) });
    });
  }

  componentDidMount() {
    this.getExhibitorInfo();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>{this.state.currentUser ? this.state.currentUser.boothName : null }</h3>
        </div>

        <Router>
          <div className="App-body">
            <Route path="/login" component={Login} />
          </div>
        </Router>
        <Form exhibitorData={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
