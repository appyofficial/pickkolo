import React from 'react';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
import generatePalette from './colorHelpers';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedPalettes[4])} />
      </div>
    );
  }
}

export default App;
