import React from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router-dom';

import About from './about';
import Home from './home';


class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <ul>
        <li><Link to={'./home'}>Home</Link></li>
        <li><Link to={'./about'}>About</Link></li>
        </ul>
      </div>
    )
  }
}
export default Dashboard;