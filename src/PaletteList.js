import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const styles = {
    root: {
        backgroundColor: 'lightblue',
        height: '100vh',
    },
    container: {
        width: '50%',
        display: 'flex',
        alingItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }

}

class PaletteList extends Component {
    render() {
        const { palette, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>This is Palette list</h1>
                    </div>
                    <div className={classes.palettes}>
                        {
                            palette.map(palette => (
                                <MiniPalette {...palette} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);