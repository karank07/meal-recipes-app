import React from 'react';

import { CATEGORIES, MEALS } from '../Data/Data';
import MealList from '../components/MealList';

const categoryMealsScreen = props => {
    
    const categoryId = props.navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
    return (<MealList listData={displayMeals} navigation={props.navigation}/>);
};

categoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat => cat.id === categoryId);
    return {
        headerTitle: selectedCat.title
    };
};

export default categoryMealsScreen;