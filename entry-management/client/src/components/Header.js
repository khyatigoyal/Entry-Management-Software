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
        <Link to='/' className='item'>
          Entry Management
        </Link>
        <div className='right menu'>
          <Link to='/' className='item'>
            All Host Records
          </Link>
          {this.renderCreate()}
        </div>
      </header>
    );
  }
}

export default Header;
