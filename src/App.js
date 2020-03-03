import React from 'react';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
import generatePalette from './colorHelpers';

class App extends React.Component {

  findPalette = id => seedPalettes.find(palette => palette.id === id);

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => { return <h1>Palette List</h1> }} />
        <Route exact path='/palette/:id' render={(routerProps) => (<Palette palette={generatePalette(this.findPalette(routerProps.match.params.id))} />)} />
      </Switch>
    );
  }
}

export default App;
