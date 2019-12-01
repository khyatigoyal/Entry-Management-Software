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
      <div className='ui centered raised red card'>
        <div className='ui image'>
          <img
            alt='...'
            src='https://icon-library.net/images/criteria-icon/criteria-icon-18.jpg'
            className='mini ui image'
          />
        </div>
        <div className='content'>
          <h2>{name}</h2>

          <div className='description'>
            <h3>{address}</h3>
            <p>{emailid}</p>
            <h5>{contact}</h5>
          </div>
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

export default connect(mapStateToProps, { fetchHost })(HostDetails);
