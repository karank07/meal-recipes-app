import React from 'react';
import { Image, View, StyleSheet, Text, Button } from 'react-native';
import { HeaderButtons, item } from 'react-navigation-header-buttons';

import { MEALS } from '../Data/Data';
import HeaderButton from '../components/HeaderButton';
import CustText from '../components/CustText';
import { ScrollView } from 'react-native-gesture-handler';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <CustText>{props.children}</CustText>
        </View>
    );
}
const mealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
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