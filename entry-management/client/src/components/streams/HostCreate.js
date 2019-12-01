import React from 'react';
import { connect } from 'react-redux';
import { createHost } from '../../actions/index';
import HostForm from './HostForm';

class HostCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createHost(formValues);
  };

  render() {
    return (
      <div>
        <HostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createHost })(HostCreate);
