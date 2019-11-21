import React from 'react';
import { connect } from 'react-redux';
import { fetchHost } from '../../actions';

class HostDetails extends React.Component {
  render() {
    if (!this.props.host) {
      return <div>loading...</div>;
    }
    const { name, address, emailid, contact } = this.props.host;
    console.log(this.props);

    return (
      <div>
        <h2>{name}</h2>
        <h3>{address}</h3>
        <p>{emailid}</p>
        <h5>{contact}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    host: state.hosts[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchHost })(HostDetails);
