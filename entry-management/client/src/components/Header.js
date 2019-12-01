import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  renderCreate() {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to='/hosts/new' className='ui button primary'>
          Register As Host
        </Link>
      </div>
    );
  }
  render() {
    return (
      <header className='ui secondary pointing menu'>
        <img
          alt='...'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlNscqBgm24lja5h_gqzV1NFrRKkEtX8HnFqIPbOt3Ovq35-FO'
          className='mini ui image'
        />
        <Link to='/' className='ui header'>
          Entry Management
        </Link>
        <div className='right menu'>
          <Link to='/' className='ui header'>
            <h3 className='ui positive button'>All Host Records</h3>
          </Link>
          {this.renderCreate()}
        </div>
      </header>
    );
  }
}

export default Header;
