import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false
        }
    }

    handleFormatChange = (e) => {
        this.setState({ format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }

    closeSnackbar = () => {
        this.setState({ open: false });
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format, open } = this.state;
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
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value='hex'>HEX</MenuItem>
                        <MenuItem value='rgb'>RGB</MenuItem>
                        <MenuItem value='rgba'>RGBA</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={open}
                    autoHideDuration={3000}
                    message={<span className='message-id'>Format changed to {format}</span>}
                    ContentProps={{ "aria-describedby": "message-id" }}
                    action={[<IconButton onClick={this.closeSnackbar} color='inherit'><CloseIcon /></IconButton>]}
                />
            </header>
        );
    }
}