import React from 'react';
import { connect } from 'react-redux';
import { fetchHosts } from '../../actions';
import { Link } from 'react-router-dom';

class HostsList extends React.Component {
  componentDidMount() {
    this.props.fetchHosts();
  }

  renderAdmin(host) {
    return (
      <div className='right floated content'>
        <Link to={`/hosts/${host.id}/newvisitor`} className='ui button primary'>
          Visit
        </Link>
      </div>
    );
  }

  renderList() {
    return this.props.hosts.map(host => {
      return (
        <div className='item' key={host.id}>
          {this.renderAdmin(host)}
          <img
            className='left floated mini ui circular image'
            alt='Loading...'
            src='https://cdn1.iconfinder.com/data/icons/corporate-management-9/48/9-512.png'
          />
          <div className='content'>
            <Link to={`/hosts/${host.id}`} className='header'>
              {host.name}
            </Link>
            <div className='description'>{host.address}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Hosts</h2>
        <div className='ui celled list'>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { hosts: Object.values(state.hosts) };
};

export default connect(mapStateToProps, { fetchHosts })(HostsList);
