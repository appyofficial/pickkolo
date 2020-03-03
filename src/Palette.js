import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import 'rc-slider/assets/index.css';
import './Palette.css';



class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        }
    }

    changeLevel = (level) => {
        this.setState({ level })
    }

    changeFormat = (val) => {
        this.setState({ format: val })
    }

    render() {
        const { level, format } = this.state;
        const { colors, paletteName, emoji } = this.props.palette;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} />
        ));

        return (
            <div className='Palette'>
                {/*navbar */}
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
                <div className='Palette-colors'>
                    {colorBoxes}
                    <ColorBox />
                </div>
                {/*footer */}
                <footer className='palette-footer'>
                    {paletteName}
                    <span>{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palette;