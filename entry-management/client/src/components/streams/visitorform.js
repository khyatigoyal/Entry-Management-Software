import React from 'react';
import { Field, reduxForm } from 'redux-form';

class VisitorForm extends React.Component {
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
    /*const tempDate = new Date();
    const date =
      tempDate.getFullYear() +
      '-' +
      (tempDate.getMonth() + 1) +
      '-' +
      tempDate.getDate() +
      ' ' +
      tempDate.getHours() +
      ':' +
      tempDate.getMinutes() +
      ':' +
      tempDate.getSeconds();
    const currDate = 'Current Date= ' + date;*/
    // console.log(this.props)
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='name' component={this.renderInput} label='Enter Name' />

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
        <Field
          name='Date and In-time'
          component={this.renderInput}
          label='enter In-time'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = 'name needs to be filled.';
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
})(VisitorForm);
