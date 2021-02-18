import React, { Component } from 'react';

class BoardForm extends Component {

    state = {
        boardName: "",
        user_id: this.props.user.id,
        pixelBoard: [],
        boardSize: "25x45"
    }

    handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
        this.props.handleClick()

        this.makeBoard()

        let newBoard = {
            boardName: this.state.boardName,
            user_id: this.state.user_id,
            pixelBoard: this.state.pixelBoard
        }

        let reqPackage = {}
        reqPackage.headers = { "Content-Type": "application/json" }
        reqPackage.method = "POST"
        reqPackage.body = JSON.stringify(newBoard)

        console.log(newBoard)

        fetch("http://localhost:3000/pb_privates", reqPackage)
            .then(res => res.json())
            .then(newBoard => {
                this.props.createBoard(newBoard)
            })

    }

    makeBoard = () => {
        let size = this.state.boardSize.split('x')
        let newBoard = (() => Array(parseInt(size[0])).fill(Array(parseInt(size[1])).fill('#F00')))()

        this.setState({ 
            pixelBoard: newBoard,
            boardSize: "25x45" 
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={(e) => this.handleSubmit(e)} className="add-toy-form">
                    <h3>Create a board!</h3>
                    <input onChange={(e) => this.setState({ boardName: e.target.value })} type="text" name="name" placeholder="Enter the boards name..." className="input-text" />
                    <br />
                    <select onChange={(e) => this.setState({ boardSize: e.target.value })}>
                        <option value="25x45">Small</option>
                        <option value="50x90">Medium</option>
                        <option value="75x135">Large</option>
                    </select>
                    <br />
                    <input type="submit" name="submit" value="Create New Board" className="submit" />
                </form>
            </div>
        );
    }

}

export default BoardForm;
