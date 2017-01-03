import React, { Component } from 'react';
import { Paper } from 'material-ui';
import './index.css';

class Sandbox extends Component {

    componentWillMount() {
        this.setState({
            update : false
        })
    }

    generateColor = () => {
        return ("#" + Math.random().toString(16).slice(2, 8))
    }

    render() {
        const { squares } = this.props
        let color = this.props.mono || this.generateColor()
        return(
            <div className="main">
                {
                    squares.map((square) => {
                        return (
                            <Paper style={{
                                         margin: `${this.props.margin}px`,
                                         height: '100px',
                                         width:'100px',
                                         backgroundColor: `${color}`
                                     }}>
                            </Paper>
                        )
                    })
                }
            </div>
        )
    }
}

export default Sandbox
