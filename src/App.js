import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from './actions/recipeActions';
import './App.css';

function App({ recipe, fetchRecipe }) {
  useEffect(() => {
    fetchRecipe(716429, false);
  }, [fetchRecipe]);

  if (recipe === null) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    )
  }

  console.log(fetchRecipe);

const { title, instructions } = recipe;

  return (
    <div className="App">

      <h2>{title || 'Title not available'}</h2>
      <p>{instructions || 'Instructions not available'}</p>


    </div>
  );
}

const mapStateToProps = (state) => ({
  recipe: state.recipe.recipe,
});

export default connect(mapStateToProps, { fetchRecipe })(App);