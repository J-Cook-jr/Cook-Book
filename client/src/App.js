import React from 'react';
import Recipes from './components/Recipes';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Recipes} />
          <Route path ="/recipes/new" exact={RecipeForm} />
          <Route path="/recipes/:id" component={RecipeDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
