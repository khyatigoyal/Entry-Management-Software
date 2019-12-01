import React from 'react';
import { Field, reduxForm } from 'redux-form';

class VisitorForm extends React.Component {
  currtime() {
    const tempTime = new Date();
    const time = tempTime.getHours() + ':' + tempTime.getMinutes();
    const currTime = time;
    return currTime;
  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} />
        {this.renderError(meta)}
      </div>
    );
  };
  renderInput1 = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete='off'
          placeholder={this.currtime()}
          disabled
        />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    console.log(this.props);
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name='name'
          component={this.renderInput}
          type='text'
          label='Enter Name'
        />

        <Field
          name='emailid'
          type='email'
          component={this.renderInput}
          label='enter emailid'
        />
        <Field
          name='contact'
          type='number'
          component={this.renderInput}
          label='enter contactNo.'
        />
        <Field
          name='InTime'
          component={this.renderInput1}
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
  if (!formValues.emailid) {
    errors.emailid = 'Enter an emailid.';
  }
  if (!formValues.contact) {
    errors.contact = 'Enter a contactNo.';
  }
  return errors;
};

export default reduxForm({
  form: 'visitorForm',
  validate
})(VisitorForm);
