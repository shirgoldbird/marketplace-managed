import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import './Deadlines.css';

class Deadlines extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      loading: true,
      deadlines: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8081/deadlines', {
      withCredentials: true
    }).then((response) => {
      const { deadlines } = response.data;
      this.setState({ 
        loading: false,
        deadlines: deadlines.sort((a, b) => {
          if (a["Due Date"] > b["Due Date"]) { 
            return 1; 
          }
          else if (a["Due Date"] < b["Due Date"]) { 
            return -1; 
          }
          return 0;
        })
      });
    }).catch((err) => {
     console.log('error', err);
    });
  }

  render() {
    return (
      <div>
        <h3>Upcoming Deadlines</h3>
        {this.state.loading ? <Loading /> :
          <Table>
            <thead>
              <tr>
                <th>Deadline</th>
                <th>Due Date</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {this.state.deadlines.map((deadline, i) => {
                if (deadline["Deadline"]) {
                  return (
                    <tr className="deadline" key={i}>
                      <td>{deadline["Deadline"]}</td>
                      <td>{deadline["Due Date"]}</td>
                      <td>{deadline["Notes"]}</td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </Table>
        }
      </div>

    );
  }
}

export default Deadlines;
