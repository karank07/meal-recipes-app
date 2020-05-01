import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../Data/Data';
import MealItem from '../components/MealItem';

const categoryMealsScreen = props => {
    const renderList = (itemData) => {
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            img={itemData.item.imageUrl}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'MealDetails',
                    params: {
                        mealId: itemData.item.id
                    }
                });
            }} />
    };
    const categoryId = props.navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={displayMeals}
                renderItem={renderList}
                style={styles.list} />
        </View>
    );

};

categoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat => cat.id === categoryId);
    return {
        headerTitle: selectedCat.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    list: {
        width: '100%',

    }
});

export default categoryMealsScreen;