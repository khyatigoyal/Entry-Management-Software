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

  renderInput = ({ input, type, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} autoComplete='off' />
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
      <div className='ui centered raised red card'>
        <div className='red content'>
          <h3>Host Details</h3>
        </div>
        <div className='ui image'>
          <img
            alt='...'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRi60WKZSNeha1ezFPX7YIn6WSDuALwBY3QOPUpNRCleaR2SCCA'
            className='mini ui  image'
          />
        </div>

        <div className='description'>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className='ui form error'
          >
            <Field
              name='name'
              type='text'
              component={this.renderInput}
              label='Enter Name'
            />
            <Field
              name='address'
              type='text'
              component={this.renderInput}
              label='Enter Address'
            />
            <Field
              name='emailid'
              type='email'
              component={this.renderInput}
              label='Enter Email-id'
            />
            <Field
              name='contact'
              type='number'
              component={this.renderInput}
              label='Enter ContactNo.'
            />
            <button className='ui button primary'>Submit</button>
          </form>
        </div>
      </div>
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
