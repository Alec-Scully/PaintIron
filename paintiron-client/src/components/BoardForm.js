import React, { Component } from 'react';

class BoardForm extends Component {

    state = {
        boardName: "",
        user_id: this.props.user.id,
        boardSize: "25x46"
    }

    handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
        this.props.handleClick()

        let size = this.state.boardSize.split('x')
        let createdBoard = (() => Array(parseInt(size[0])).fill(Array(parseInt(size[1])).fill('#FFF')))()

        let newBoard = {
            name: this.state.boardName,
            user_id: this.state.user_id,
            pixel_board: createdBoard
        }

        this.setState({ 
            boardSize: "25x46" 
        }, )

        let reqPackage = {}
        reqPackage.headers = { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.token}` }
        reqPackage.method = "POST"
        reqPackage.body = JSON.stringify(newBoard)

        console.log(newBoard)

        fetch("http://localhost:3000/pb_privates", reqPackage)
            .then(res => res.json())
            .then(newBoard => {
                this.props.createBoard(newBoard)
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
                        <option value="25x46">Small</option>
                        <option value="50x92">Medium</option>
                        <option value="75x138">Large</option>
                    </select>
                    <br />
                    <input type="submit" name="submit" value="Create New Board" className="submit" />
                </form>
            </div>
        );
    }

}

export default BoardForm;
