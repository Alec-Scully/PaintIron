import React, { Component } from 'react'
import Cell from './Cell'

class CurrentBoard extends Component {


    genRow = (vals, rows) => (
        vals.map((val, idx) => <Cell key={idx} rows={rows} cols={idx} color={val} selectedColor={this.props.selectedColor} updateBoard={this.props.updateBoard} />)
    )

    genMatrix = () => (
        this.props.curBoard.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals, idx)}</div>)
    )

    render() {
        return (
            <div id="matrix">
                {this.genMatrix()}
                <br />
                <button onClick={() => this.props.deleteBoard()}>Delete Board</button>
                <button onClick={() => this.props.saveBoard()}>Save Board</button>
            </div>
        )
    }
}

export default CurrentBoard