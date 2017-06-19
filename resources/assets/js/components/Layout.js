// ../assets/js/components/Layout

import React from 'react';

import Header from './Header';
import Page from './Page';
import Footer from './Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Page></Page>
        <Footer></Footer>
      </div>
    );
  }
}
