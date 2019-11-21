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
        <Link to={`/hosts/${host.id}/checkout`} className='ui button negative'>
          Checkout
        </Link>
      </div>
    );
  }

  renderList() {
    return this.props.hosts.map(host => {
      return (
        <div className='item' key={host.id}>
          {this.renderAdmin(host)}
          <i className='large middle aligned icon camera' />
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
    // console.log(this.props.streams)
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
