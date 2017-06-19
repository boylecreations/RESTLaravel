import React from 'react';
import Navbar from './Navbar';
import Masthead from './Masthead';

export default class Header extends React.Component{
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Masthead></Masthead>
      </div>
    );
  }
};
