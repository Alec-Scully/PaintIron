import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'


class App extends Component {

  state = {
    user: {},
    loggedIn: false,
    selectedColor: '#FFF',
    curSwatch: ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"],
    allBoards: [],
    curBoard: [],
    curBoardId: ""
  };

  setCurBoard = (board) => {
    this.setState({
      curBoard: board.pixel_board,
      curBoardId: board.id
    })
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  setCurrentUser = (user) => {
    console.log(user.pb_privates)
    this.setState({
      user: user,
      loggedIn: true,
      curSwatch: user.user_palette.color_swatch,
      allBoards: user.pb_privates,
      curBoard: user.pb_privates[0].pixel_board
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
      return (
        <div>
          <h2> I'm sorry, I don't know who you are...</h2>
          <h3>Please log in above!</h3>
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
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    })
      .then(res => res.json())
      .then(user => this.setCurrentUser(user))
  }

  updateBoard = (row, col) => {
    let newBoard = this.state.curBoard
    newBoard[row][col] = this.state.selectedColor
    this.setState({ curBoard: newBoard })
  }

  saveBoard = () => {
    // let sendBoard = this.state.curBoard
    let id = this.state.curBoardId

    let sendBoard = {
      "pixel_board": this.state.curBoard
    }

    let reqPackage = {}
    reqPackage.headers = { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}` }
    reqPackage.method = "PATCH"
    reqPackage.body = JSON.stringify(sendBoard)

    fetch("http://localhost:3000/pb_privates/" + id, reqPackage)

    // console.log("Board saved!")
  }

  deleteBoard = () => {
    let newBoards = this.state.allBoards.filter((board) => board.id !== this.state.curBoardId)
    let delBoard = this.state.curBoardId
    this.setState({
      allBoards: newBoards,
      curBoard: [],
      curBoardId: ""

    })

    fetch("http://localhost:3000/pb_privates/" + delBoard, {
      method: "DELETE"
    })
  }

  createBoard = (newBoard) => {
    this.setState({allBoards: [...this.state.allBoards, newBoard]})
    this.setCurBoard(newBoard)
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar logOut={this.logOut} loggedIn={this.state.loggedIn} />
          {this.displayGreeting()}

          <Route exact path="/">
            <Home updateBoard={this.updateBoard}
              curBoard={this.state.curBoard}
              setCurBoard={this.setCurBoard}
              allBoards={this.state.allBoards}
              curSwatch={this.state.curSwatch}
              selectedColor={this.state.selectedColor}
              setSelectedColor={this.setSelectedColor}
              loggedIn={this.state.loggedIn}
              saveBoard={this.saveBoard}
              deleteBoard={this.deleteBoard}
              createBoard={this.createBoard}
              user={this.state.user}
            />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          {/* if someone is logged in, this route will take you home */}
          <Route exact path="/login">
            {this.state.loggedIn ?
              <Redirect to="/" />
              :
              <Login setCurrentUser={this.setCurrentUser} tokenLogin={this.tokenLogin} />}
          </Route>

          {/* if someone is logged in, this route will take you home */}
          <Route exact path="/signup">
            {this.state.loggedIn ?
              <Redirect to="/" />
              :
              <Signup />}
          </Route>

        </Router>
      </div>
    )
  }
}

export default App;
