import React from 'react';
import paintiron_logo from './paintiron_logo_copy.png';


class About extends React.Component {
  render() {
    return(
      <div>
        <img src={paintiron_logo} className="logo" alt="paintiron logo"/>
        <h1>Paintiron is an online pixel-paint application that allows users to create and color pixel boards.</h1>
        <h3>To get started, sign up in the tab above. If you are already signed up, please log in on the LogIn tab above!</h3>
        <h3>If you are already logged in, then get painting!</h3>
      </div>
    ) 
  }
}

export default About; 