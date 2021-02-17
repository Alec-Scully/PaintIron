import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup  from './components/Signup'


class App extends Component {

  state = {
    user: {},
    loggedIn: false,
  };

  setCurrentUser = (user) => {
    this.setState({
      user: user,
      loggedIn: true,
    });
  }

  logOut = () => {
    this.setState({ user: {}, loggedIn: false })
    localStorage.token = "";
  }

  displayGreeting = () => {
    if (this.state.loggedIn) {
      return (
        <h1>
          Welcome back {this.state.user.username}!
        </h1>
      );
    } else {
      return(
        <div>
          <h2> I'm sorry, I don't know who you are...</h2>
          <h3>Please log in below!</h3>
        </div>
      );
    }
  };

  componentDidMount = () => {
    let token = localStorage.token;
    if (typeof token !== "undefined" && token.length > 1) {
      this.tokenLogin(token)
    } else {
      console.log("No token found, try loggin in!")
    }
  }

  tokenLogin = (token) => {
    fetch("http://localhost:3000/auto_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({ token: token })
    })
      .then(res => res.json())
      .then(user => this.setCurrentUser(user))
  }



   render() {
    return (
    <div>
      <Router>
        <Navbar logOut={this.logOut} loggedIn={this.state.loggedIn}/>
        {this.displayGreeting()}

        <Route exact path="/">
          <Home loggedIn={this.state.loggedIn}/>
        </Route> 

        <Route exact path="/about">
          <About />
        </Route>

        {/* if someone is logged in, this route will take you home */}
        <Route exact path="/login">
          {this.state.loggedIn ? 
            <Redirect to="/" /> 
              : 
            <Login setCurrentUser={this.setCurrentUser}/>}
        </Route> 

        {/* if someone is logged in, this route will take you home */}
        <Route exact path="/signup">
          {this.state.loggedIn ? 
           <Redirect to="/" />
              : 
           <Signup /> }
        </Route>

      </Router>
    </div>
    )
  }
}

export default App;
