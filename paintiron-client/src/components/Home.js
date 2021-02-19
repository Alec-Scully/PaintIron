// src/Home.js
import React from 'react';
import BoardContainer from './BoardContainer'
import paintiron_logo from './paintiron_logo_copy.png'

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.loggedIn ?
          <BoardContainer curSwatch={this.props.curSwatch}
            setSelectedColor={this.props.setSelectedColor}
            allBoards={this.props.allBoards}
            setCurBoard={this.props.setCurBoard}
            selectedColor={this.props.selectedColor}
            curBoard={this.props.curBoard}
            updateBoard={this.props.updateBoard}
            saveBoard={this.props.saveBoard}
            deleteBoard={this.props.deleteBoard}
            createBoard={this.props.createBoard}
            user={this.props.user}
          />
          :
          <div>
            <img src={paintiron_logo} alt="paintiron logo"/>
            <h1>Welcome to Paintiron!</h1>
            <br/>
            <p> You are currently NOT logged in! In order to see the contents of this page, you must be logged in.</p>
            <p> Please click the Login button above to log in, or click the SignUp button above to become a memeber!</p>
          </div>
        }
      </div>
    )
  }
}

export default Home; 