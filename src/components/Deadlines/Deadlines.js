import React, { Component } from 'react';
import connection from '../../airtable';
import { Table } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import './Deadlines.css';

class Deadlines extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, deadlines: [] };
  }

  componentDidMount() {
    connection('Deadlines').select().all().then(records => {
      this.setState({ loading: false, deadlines: records.sort((a, b) => {
        if (a.fields["Due Date"] > b.fields["Due Date"]) { return 1; }
        else if (a.fields["Due Date"] < b.fields["Due Date"]) { return -1; }
        return 0;
      })});
    }).catch(err => {
     console.log('error', err)
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
                if (deadline.fields["Deadline"]) {
                  return (
                    <tr className="deadline" key={i}>
                      <td>{deadline.fields["Deadline"]}</td>
                      <td>{deadline.fields["Due Date"]}</td>
                      <td>{deadline.fields["Notes"]}</td>
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
