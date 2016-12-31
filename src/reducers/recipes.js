let recipeId = 0;

const recipe = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        id: recipeId++,
        recipeName : action.recipeName,
        ingredients: action.ingredients
      }
    case 'EDIT':
      return {
        id : action.id,
        recipeName: action.recipeName,
        ingredients: action.ingredients
      }    
    default:
      return state;
  }
}

const recipes = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, recipe(undefined, action)];
    case 'DELETE' :
      if (state.length === 0) {
        return state;
      }
      return state.filter((recipe) => {
        return (recipe.id !== action.id)
      });
    case 'EDIT':
      const newState = state.map((recipeItem) => {
        if (recipeItem.id !== action.id) {
          return recipeItem;
        } else {
          return recipe(recipeItem, action);
        }
      })
      return newState
    default:
      return state;
  }
}

export default recipes;