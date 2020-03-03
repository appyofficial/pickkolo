import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PaletteList extends Component {
    render() {
        const { palette } = this.props;
        return (
            <div className='Palettelist'>
                <h1>This is Palette list</h1>
                {
                    palette.map(palette => (
                        <p>
                            <Link to={`/palette/${palette.id}`} >{palette.paletteName}</Link>
                        </p>
                    ))
                }
            </div>
        );
    }
}