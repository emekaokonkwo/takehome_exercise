import React, { Component } from 'react'
import { connect } from 'react-redux'
import  Home  from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <Dashboard /> */}
          <Home />
          <About />
        </div>
      </div>
    )
  }
}

export default connect()(App)
