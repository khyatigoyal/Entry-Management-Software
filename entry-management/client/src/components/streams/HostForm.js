import React from 'react';
import { Field, reduxForm } from 'redux-form';

class HostForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    // console.log(this.props)
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='name' component={this.renderInput} label='Enter Name' />
        <Field
          name='address'
          component={this.renderInput}
          label='enter address'
        />
        <Field
          name='emailid'
          component={this.renderInput}
          label='enter emailid'
        />
        <Field
          name='contact'
          component={this.renderInput}
          label='enter contactNo.'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = 'name is need to fill.';
  }

  if (!formValues.address) {
    errors.address = 'Enter an address.';
  }
  if (!formValues.emailid) {
    errors.emailid = 'Enter an emailid.';
  }
  if (!formValues.contact) {
    errors.contact = 'Enter a contactNo.';
  }

  return errors;
};

export default reduxForm({
  form: 'hostForm',
  validate
})(HostForm);
