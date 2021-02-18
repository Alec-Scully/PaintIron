import React, { Component } from 'react'

class BoardSelector extends Component {

    render() {
        return (
            // <div>
                <button onClick={() => this.props.setCurBoard(this.props.board)}>{this.props.board.name}</button>
            // </div>
        )
    }
}

export default BoardSelector