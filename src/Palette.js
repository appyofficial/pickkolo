import React from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';



class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
    }

    changeLevel = (level) => {
        this.setState({ level })
    }

    render() {
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ));
        return (
            <div className='Palette'>
                <div className='slider'>
                    <Slider
                        defaultValue={this.state.level}
                        min={100}
                        max={900}
                        onAfterChange={this.changeLevel}
                        step={100} />
                </div>
                {/*navbar */}
                <div className='Palette-colors'>
                    {colorBoxes}
                    <ColorBox />
                </div>
                {/*footer */}
            </div>
        );
    }
}

export default Palette;