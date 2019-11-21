import React from 'react';
import { connect } from 'react-redux';
import { visitHost } from '../../actions/index';
import VisitorForm from './visitorform';

class VisitorCreate extends React.Component {
  onSubmit = formValues => {
    console.log(formValues);
    this.props.visitHost(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.visitor) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Visitor Details</h3>
        <VisitorForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    visitor: state.visitors[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { visitHost })(VisitorCreate);
