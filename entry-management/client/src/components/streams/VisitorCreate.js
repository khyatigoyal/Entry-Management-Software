import React from 'react';
import { connect } from 'react-redux';
import { visitHost, fetchHost } from '../../actions/index';
import VisitorForm from './visitorform';

class VisitorCreate extends React.Component {
  emailid = () => {
    return this.props.host.emailid;
  };
  onSubmit = formValues => {
    console.log(formValues);
    this.props.visitHost(this.props.host.id, formValues);
    const templateId = 'template_4GwoYG7J';

    this.sendFeedback(templateId, {
      name: formValues.name,
      emailid: formValues.emailid,
      contact: formValues.contact,
      intime: formValues.InTime,
      to_mail: this.emailid()
    });
  };
  sendFeedback(templateId, variables) {
    window.emailjs
      .send('gmail', templateId, variables, 'user_lfSQio4IBYlIANJ1SqnKh')
      .then(res => {
        console.log('Email successfully sent!', res);
      })
      .catch(err =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  }
  render() {
    return (
      <div>
        <h3>Visitor Details</h3>
        <VisitorForm onSubmit={this.onSubmit} userid={this.props.host} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    host: state.hosts[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { visitHost, fetchHost })(
  VisitorCreate
);
