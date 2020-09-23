import React from 'react';
 const Recipes = props =>{
     const{recipes} = props;
     return(
         <div className="card-columns">
             {
            recipes.map(recipe=>(
                
                    <div className="card py-2 text-center">
                        <img src={recipe.recipe.image} className="img-fluid w-50 mx-auto rounded-circle"/>
                       <div className="card-body">
                           <h4>{recipe.recipe.label}</h4>
                       </div>
                       <ul className="list-group list-group-flush">
                         {
                           recipe.recipe.ingredientLines.map(ingredient =>(
                           <li className="list-group-item">{ingredient}</li>
                           ))
                         }
                        </ul>
                    </div>
                
            ))
             }
         </div>
     )
 }
 export default Recipes;