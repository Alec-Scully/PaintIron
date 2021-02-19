import React, { Component } from 'react'

class Cell extends Component {

    state = {
        color: this.props.color
    }

    handleClick = () => {
        this.setState({
            color: this.props.selectedColor
        })
        this.props.updateBoard(this.props.rows, this.props.cols)
    }

    render() {
        return (
            <div onDragEnter={this.handleClick} onClick={this.handleClick} className="cell"
                style={{ backgroundColor: this.state.color }}>
            </div>
        )
    }
}

export default Cell