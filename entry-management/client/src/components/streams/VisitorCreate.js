import React from 'react';
import { connect } from 'react-redux';
import { visitHost } from '../../actions/index';
import VisitorForm from './visitorform';

class VisitorCreate extends React.Component {
  onSubmit = formValues => {
    console.log(formValues);
    this.props.visitHost(formValues);
  };

  render() {
    return (
      <div>
        <h3>Visitor Details</h3>
        <VisitorForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { visitHost })(VisitorCreate);
