import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { slide as Menu } from 'react-burger-menu';

class Navbar extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <nav className='navbar'>
        <img src={logo} alt='logo' className='logo' />
        <Menu right width='400px' pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
          <a id='contact' href='mailto:inctouchwood@gmail.com' className='menu-item'>
            Contact Us
          </a>
          <a href='https://anchor.fm/touchwood-inc/' target='_blank' rel='noopener noreferrer'>
            The Void Podcast
          </a>
        </Menu>
      </nav>
    );
  }
}

export default Navbar;
