import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealid
      );
      if (existingIndex >= 0) {
        const updateFavMeals = [...state, favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const actionFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (actionFilters.glutenfree && !meal.isGlutenFree) {
          return false;
        }
        if (actionFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (actionFilters.vegetaranian && !meal.isVegetaranian) {
          return false;
        }
        if (actionFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMeals };
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
