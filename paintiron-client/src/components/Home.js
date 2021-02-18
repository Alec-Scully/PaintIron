// src/Home.js
import React from 'react';
import BoardContainer from './BoardContainer'

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
          <h1>Welcome to Paintiron! You are NOT logged in!</h1>
        }
      </div>
    )
  }
}

export default Home; 