import React, { Component } from 'react';
import './Form.css';
import { jsToAirtable } from '../../utils/mapColumns';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();
    console.log('submit')
  }

  onChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  // TODO: figure out how to order the fields instead of them being random
  render() {
    return (
      <form className="Form" onSubmit={this.onSubmit}>
        {Object.keys(this.props.exhibitorData).map(field => {
          if (Array.isArray(this.props.exhibitorData[field])) {
            return (
              <div>
                <p>{jsToAirtable[field]}: </p>
                <select disabled='true' name={field} key={field}>
                {/* this doesn't work and I'm not sure why */}
                {this.props.exhibitorData[field].forEach(item => {
                  console.log(item);
                  return <option value={item} key={item}>{item}</option>;
                  }
                )}
                </select>
              </div>
            );
          }
          return (
            <div>
              <p>{jsToAirtable[field]}: </p>
              <input
              onChange={this.onChange}
              name={field}
              key={field}
              type='text'
              placeholder={jsToAirtable[field]}
              value={this.props.exhibitorData[field]} />
            </div>
          );
        })}
        <input type="submit" value="Update Information" />
      </form>
    );
  }
}

export default Form;
