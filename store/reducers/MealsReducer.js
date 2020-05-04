import { MEALS } from '../../Data/Data';
import * as actionType from '../actions/mealsAction';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favourites: []
};
const toggleFav = (state, action) => {
    const currIndex = state.favourites.findIndex(meal => meal.id === action.id);
    if (currIndex >= 0) {
        const updatedMeals = [...state.favourites];
        updatedMeals.splice(currIndex, 1);
        return { ...state, favourites: updatedMeals };
    } else {
        const meal = state.meals.find(meal => meal.id === action.id);
        return { ...state, favourites: state.favourites.concat(meal) };
    }
};
const filterMeals = (state, action) => {
    const filteredMeal = state.meals.filter(meal => {
        if (action.filters.glutenFree && !meal.isGlutenFree) {
            return false;
        }
        if (action.filters.vegan && !meal.isVegan) {
            return false;
        }
        if (action.filters.vegetarian && !meal.isVegetarian) {
            return false;
        }
        if (action.filters.lactoseFree && !meal.isLactoseFree) {
            return false;
        }
        return true;
    });
    return { ...state, filteredMeals: filteredMeal };
};

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.TOGGLE_FAV: return toggleFav(state, action);
        case actionType.APPLY_FILTERS: return filterMeals(state, action);
        default:
            return state;
    }

};

export default mealReducer;

