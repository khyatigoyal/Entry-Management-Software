import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVisitor, deleteVisitor } from '../../actions';
import history from '../../history';

class VisitorDelete extends React.Component {
  componentDidMount() {
    this.props.fetchVisitor(this.props.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteVisitor(id)}
          className='ui primary button negative'
        >
          Delete
        </button>
        <Link to={'/'} className='ui button'>
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderTitle() {
    if (!this.props.visitor) {
      return 'Visitor checked out';
    }

    return (
      <div>
        <span style={{ color: 'red' }}>Check Out </span>
        {'from  '}
        {this.props.visitor.name}
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
    visitor: state.hosts[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, {
  fetchVisitor,
  deleteVisitor
})(VisitorDelete);
