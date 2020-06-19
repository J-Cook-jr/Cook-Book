import React from 'react';
import Recipes from './components/Recipes';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }

  };
  render() {
    return (
      <div className="App">
        <Recipes />
      </div>
    );
  }
}

export default App;
