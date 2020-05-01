import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { HeaderButtons, item } from 'react-navigation-header-buttons';
import { MEALS } from '../Data/Data';
import HeaderButton from '../components/HeaderButton';

const mealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};
mealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <item title='Favourite' iconName='ios-star-outline' onPress={() => { }}></item>
            </HeaderButtons>

    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default mealDetailsScreen;