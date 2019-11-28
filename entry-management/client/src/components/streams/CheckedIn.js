import React from 'react';
import { connect } from 'react-redux';
import { fetchHost } from '../../actions/index';
import { Link } from 'react-router-dom';
class CheckedIn extends React.Component {
  render() {
    if (!this.props.host) {
      return <div>Loading...</div>;
    }
    const { name, id } = this.props.host;
    console.log(this.props);

    return (
      <div>
        <h5>
          A very warm welcome from <u>{name}</u>
        </h5>
        <p>
          Do you want to
          <Link to={`/hosts/${id}/newvisitor/in/checkout`}> Checkout </Link>
          from {name} appartment!!!
        </p>
        <div className='right floated content'>
          <Link
            to={`/hosts/${id}/newvisitor/in/checkout`}
            className='ui button negative'
          >
            Checkout!
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    host: state.hosts[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchHost })(CheckedIn);
