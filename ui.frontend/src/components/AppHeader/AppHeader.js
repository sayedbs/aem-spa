import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

import "./AppHeader.scss";

export const AppHeaderEditConfig = {

    emptyLabel: 'App Header',

    isEmpty: function(props) {
        return !props;
    }
};

export const  AppHeader = ({logo='/assets/images/app-logo2.jpg',...props}) => {
  return (
    <header className='app-header'>
      <div className='app-header-content'>
        <div className='logo'>
          <a href='/'><img src={logo} alt="logo" /></a>
        </div>
        <nav>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


MapTo('wknd-spa-react/components/app-header')(AppHeader, AppHeaderEditConfig);