import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout.jsx';
import Header from './containers/Header/Header.jsx'
import Main from './containers/Main/Main.jsx'

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Main />
      </Layout>
    );
  }
}

export default App;
