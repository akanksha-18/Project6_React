import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css';

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div className="recipe-loading">Loading...</div>;
  }

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{recipe.strMeal}</h1>
      <img className="recipe-image" src={recipe.strMealThumb} alt="meal" />
      <p className="recipe-instructions">{recipe.strInstructions}</p>
      <a className="recipe-link" href={recipe.strSource}>Watch video</a>
    </div>
  );
}

export default RecipePage;
