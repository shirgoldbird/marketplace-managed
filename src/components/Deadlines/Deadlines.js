import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchDeadlines } from '../../actions/deadlineActions';
import Loading from '../Loading/Loading';
import './Deadlines.css';

class Deadlines extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDeadlines());
  }

  render() {
    const { isFetching, items } = this.props;
    return (
      <div>
        <h3>Upcoming Deadlines</h3>
        {isFetching ? <Loading /> :
          <Table>
            <thead>
              <tr>
                <th>Deadline</th>
                <th>Due Date</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {items.map((deadline, i) => {
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

function mapStateToProps(state) {
  const { deadline } = state;
  const {
    isFetching,
    items
  } = deadline;

  return {
    isFetching,
    items
  }
}

export default connect(mapStateToProps)(Deadlines);
