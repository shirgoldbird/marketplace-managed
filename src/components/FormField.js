import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class FormField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  // TODO: Better validation, perhaps pass in a function instead
  validationState() {
    if (this.state.value === '') {
      return null;
    }

    if (typeof this.props.checkValidation === 'function') {
      return this.props.checkValidation();
    }

    return null;
  }

  handleChange(ev) {
    this.setState({
      value: ev.target.value
    });

    if (typeof this.props.onChange === 'function') {
      this.props.onChange && this.props.onChange(ev);
    }
  }

  render() {
    const {
      label,
      helpBlock,
      onChange,
      checkValidation,
      ...rest
    } = this.props;
    return (
      <FormGroup
        controlId={this.props.name}
        validationState={this.validationState()}
      >
        <ControlLabel>
          {label}
        </ControlLabel>
        <FormControl
          onChange={this.handleChange.bind(this)}
          {...rest}
        />
        <FormControl.Feedback />
        <HelpBlock>
          {helpBlock}
        </HelpBlock>
      </FormGroup>
    );
  }
}

FormField.defaultProps = {
  label: '',
  helpBlock: '',
};

export default FormField;