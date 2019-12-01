import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHost, fetchVisitor } from '../../actions';
import history from '../../history';

class VisitorDelete extends React.Component {
  currtime() {
    const tempTime = new Date();
    const time = tempTime.getHours() + ':' + tempTime.getMinutes();
    const currTime = time;
    return currTime;
  }
  onSubmit = () => {
    const templateId = 'visitor_s_email';

    this.sendFeedback(templateId, {
      name: this.props.host.name,
      address: this.props.host.address,
      emailid: this.props.host.emailid,
      contact: this.props.host.contact,
      checkouttime: this.currtime(),
      to_mail: 'khyatigoyal@rediffmail.com'
    });
    history.push('/');
  };
  sendFeedback(templateId, variables) {
    window.emailjs
      .send('gmail', templateId, variables, 'user_lfSQio4IBYlIANJ1SqnKh')
      .then(res => {
        console.log('Email successfully sent! to visitor', res);
      })
      .catch(err =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  }

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={this.onSubmit} className='ui primary button negative'>
          Checkout
        </button>
        <Link to={'/'} className='ui button'>
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderTitle() {
    if (!this.props.host) {
      return 'Visitor checked out';
    }

    return (
      <div>
        <span style={{ color: 'red' }}>Check Out </span>
        {'from  '}
        {this.props.host.name}
        {' Appartment'}
      </div>
    );
  }

  render() {
    return (
      <Modal
        title={this.renderTitle()}
        content='Are you sure want to checkout?'
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    host: state.hosts[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  fetchHost,
  fetchVisitor
})(VisitorDelete);
