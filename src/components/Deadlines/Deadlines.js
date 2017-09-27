import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchDeadlines } from '../../actions/deadlineActions';
import Loading from '../Loading/Loading';
import './Deadlines.css';

class Deadlines extends Component {
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
                if (deadline.name) {
                  return (
                    <tr className="deadline" key={deadline.id}>
                      <td>{deadline.name}</td>
                      <td>{deadline.dueDate}</td>
                      <td>{deadline.notes}</td>
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

Deadlines.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

export default Deadlines;
