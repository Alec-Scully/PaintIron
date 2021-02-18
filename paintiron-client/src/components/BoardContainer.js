import React, { Component } from 'react';
import ColorSwatch from './ColorSwatch';
import CurrentBoard from './CurrentBoard';
import BoardSelector from './BoardSelector';
import BoardForm from './BoardForm'

export default class BoardContainer extends Component {
    state = {
        display: false
    }

    handleClick = () => {
        let newBoolean = !this.state.display
        this.setState({
            display: newBoolean
        })
    }

    render() {
        return (
            <div>
                <div>
                    <ColorSwatch curSwatch={this.props.curSwatch} setSelectedColor={this.props.setSelectedColor} />
                </div>
                <div>
                    Create a new board here!<br />
                    {this.state.display
                        ?
                        <BoardForm handleClick={this.handleClick} user={this.props.user} createBoard={this.props.createBoard}/>
                        :
                        <div>
                            <button onClick={this.handleClick}> Create a Board </button>
                        </div>
                    }
                    <br />
                    Pick which board you want to see!
                    {this.props.allBoards.map(board => <BoardSelector setCurBoard={this.props.setCurBoard} board={board} key={board.id} />)}
                </div>
                <div>
                    <CurrentBoard saveBoard={this.props.saveBoard}
                        updateBoard={this.props.updateBoard}
                        selectedColor={this.props.selectedColor}
                        curBoard={this.props.curBoard}
                        deleteBoard={this.props.deleteBoard}
                    />
                </div>
            </div>
        )
    }
}

// export default BoardContrainer

