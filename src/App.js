import React from 'react';
import seedPalettes from './seedPalettes';
import Palette from './Palette';

class App extends React.Component {
  render() {
    return (
      <div>
        <Palette {...seedPalettes[1]} />
      </div>
    );
  }
}

export default App;
