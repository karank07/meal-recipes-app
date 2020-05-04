import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustText from '../components/CustText';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const favouriteMealsScreen = props => {
    const favMeals = useSelector(state => state.meals.favourites);
    if (favMeals.length === 0) {
        return <View style={styles.container}>
            <CustText style={{ textAlign: 'center', fontSize: 18 }}>No favourites found!</CustText>
        </View>;
    }
    return <MealList listData={favMeals} navigation={props.navigation} />;
};

favouriteMealsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favourites',
        headerLeft:
            (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }}></Item>
            </HeaderButtons>)
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default favouriteMealsScreen;