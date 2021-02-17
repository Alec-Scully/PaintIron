// src/Home.js
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.loggedIn ? 
          <h1>Welcome to Paintiron! You are logged in!</h1>
            :
          <h1>Welcome to Paintiron! You are NOT logged in!</h1>
        }
      </div>
    )
  }
}

export default Home; 