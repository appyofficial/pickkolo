import React from 'react';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
import PaletteList from './PaletteList';
import generatePalette from './colorHelpers';

class App extends React.Component {

  findPalette = id => seedPalettes.find(palette => palette.id === id);

  render() {
    return (
      <Switch>
        <Route exact path='/' render={routeProps => <PaletteList palette={seedPalettes} {...routeProps} />} />
        <Route exact path='/palette/:id' render={(routeProps) => (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)} />
      </Switch>
    );
  }
}

export default App;
