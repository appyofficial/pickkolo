import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: 'grey'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0',
        color: 'black'
    }
}

function MiniPalette(props) {
    const { classes, paletteName, emoji } = props;
    return (
        <div className={classes.root}>
            <div className={classes.colors}></div>
            <div className={classes.title}>{paletteName} <span>{emoji}</span></div>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);