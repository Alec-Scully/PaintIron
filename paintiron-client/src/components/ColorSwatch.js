import React, { Component } from 'react';

class ColorSwatch extends Component {


    makeColorSwatches = () => {
        return this.props.curSwatch.map((str, idx) => {
            return <div onClick={() => this.props.setSelectedColor(str)} key={idx} className="color-swatch" style={{ backgroundColor: str }} />
        })
    }

    render() {
        return (
            <div id="colorSelector">
                {this.makeColorSwatches()}
            </div>
        )
    }
}

export default ColorSwatch