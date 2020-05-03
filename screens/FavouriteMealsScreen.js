import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../Data/Data';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const favouriteMealsScreen = props => {
    const displayList = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return <MealList listData={displayList} navigation={props.navigation} />
};

favouriteMealsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favourties',
        headerLeft:
            (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }}></Item>
            </HeaderButtons>)
    }
};

export default favouriteMealsScreen;