import React, { useEffect, useCallback } from 'react';
import { Image, View, StyleSheet, Text, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import CustText from '../components/CustText';
import { ScrollView } from 'react-native-gesture-handler';
import { toggleFav } from '../store/actions/mealsAction';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <CustText>{props.children}</CustText>
        </View>
    );
}
const mealDetailsScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const isFav = useSelector(state => state.meals.favourites.some(meal => meal.id === mealId));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const dispatch = useDispatch();

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFav(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavHandler });
    }, [toggleFavHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFav: isFav });
    }, [isFav]);
    
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.img} />
                <View style={styles.details}>
                    <CustText>{selectedMeal.duration}M</CustText>
                    <CustText>{selectedMeal.complexity.toUpperCase()}</CustText>
                    <CustText>{selectedMeal.affordability.toUpperCase()}</CustText>
                </View>
                <View>
                    <Text style={styles.title}>Ingredients:</Text>
                    {selectedMeal.ingredients.map(item => (<ListItem key={item}>{item}</ListItem>))}
                    <Text style={styles.title}>Steps:</Text>
                    {selectedMeal.steps.map(item => (<ListItem key={item}>{item}</ListItem>))}
                </View>
            </View>
        </ScrollView>
    );
};
mealDetailsScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFav = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');
    return {
        headerTitle: mealTitle,
        headerBackTitleVisible: false,
        
        headerRight:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favourite' iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={toggleFav}></Item>
            </HeaderButtons>

    };
};

const styles = StyleSheet.create({

    img: {
        height: 200,
        width: '100%'
    },
    details: {
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 20,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 5
    }
});

export default mealDetailsScreen;