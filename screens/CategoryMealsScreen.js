import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import CustText from '../components/CustText';
import { CATEGORIES } from '../Data/Data';
import MealList from '../components/MealList';

const categoryMealsScreen = props => {
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const categoryId = props.navigation.getParam('categoryId');
    const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
    if (displayMeals.length === 0) {
        return <View style={styles.conatiner}>
            <CustText style={{fontSize: 20}}>No meals found!</CustText>
        </View>;
    }
    return (<MealList listData={displayMeals} navigation={props.navigation} />);
};

categoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat => cat.id === categoryId);
    return {
        headerTitle: selectedCat.title,
        headerBackTitleVisible: false,
        
    };
};
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default categoryMealsScreen;