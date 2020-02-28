import React from 'react';
import ColorBox from './ColorBox';


class Palette extends React.Component {
    render() {
        return (
            <div className='Palette'>
                {/*navbar */}
                <div className='Palette-colors'>
                    {/*Box of colors */}
                    <ColorBox />
                </div>
                {/*footer */}
            </div>
        );
    }
}

export default Palette;