// import React from 'react';

// const FoodItem = (getMeal) => {
//     console.log(getMeal.data)
//     return(
//         <>
//              <div className="card">
//                 <img src={getMeal.data.strMealThumb} alt="meal"/>
//                 <div className ="info">
//                     <h2>{getMeal.data.strMeal}</h2>
//                     <p>{getMeal.data.strArea} food</p>
//                 </div>
//                 <div className ="recipe">
//                     <h2>Recipe</h2>
//                     <p>{getMeal.data.strInstructions}</p>
                    
//                     <a href={getMeal.data.strSource}>Watch video</a>
//                 </div>
//             </div>  
//         </>
//     )
// }

// export default FoodItem;
import React from 'react';

const FoodItem = (getMeal) => {
    console.log(getMeal.data)
    return(
        <>
            <div className="card">
                <img src={getMeal.data.strMealThumb} alt="meal"/>
                <div className ="info">
                    <h2>{getMeal.data.strMeal}</h2>
                    <p>{getMeal.data.strArea} food</p>
                </div>
            </div>  
        </>
    )
}

export default FoodItem;

