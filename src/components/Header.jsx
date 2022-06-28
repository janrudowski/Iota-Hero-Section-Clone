import React from 'react';

export default function Header() {
  return (
    <header>
      <div className='container-flex'>
        <div className='header-logo'>
          <img
            className='header-logo-image'
            src='images/logo-icon-light.svg'
            alt='logo'
          />
          <img
            className='header-title-image'
            src='images/logo-text.svg'
            alt='title'
          />
        </div>
        <nav className='header-nav'>
          <div className='menu-mobile'>
            <img src='images/hamburger-menu.svg' alt='' />
          </div>
          <ul>
            <li>
              <a href='index.html'>Get Started</a>
            </li>
            <li>
              <a href='index.html'>Solutions</a>
            </li>
            <li>
              <a href='index.html'>Develop</a>
            </li>
            <li>
              <a href='index.html'>Foundation</a>
            </li>
            <li>
              <a href='index.html'>Connect</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
