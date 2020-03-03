import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex'
        }
    }

    handleChange = (e) => {
        this.setState({ format: e.target.value });
        this.props.handleChange(e.target.value);
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    Pickkolo
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            onAfterChange={changeLevel}
                            step={100} />
                    </div>
                </div>
                <div>
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value='hex'>HEX</MenuItem>
                        <MenuItem value='rgb'>RGB</MenuItem>
                        <MenuItem value='rgba'>RGBA</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}