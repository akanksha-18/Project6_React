
import React from 'react';


const FoodItem = ({ data }) => {
  return (
    <div className="card">
      <img src={data.strMealThumb} alt="meal" />
      <div className="info">
        <h2>{data.strMeal}</h2>
        <p>{data.strArea} food</p>
      </div>
    </div>
  );
};

export default FoodItem;
