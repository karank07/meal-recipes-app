import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import Color from '../constants/Color';
import CustText from '../components/CustText';
import { applyFilters } from '../store/actions/mealsAction';

const FilterItem = props => {

    return (<View style={styles.filterContainer}>
        <CustText >{props.title}</CustText>
        <Switch
            onValueChange={props.onChange}
            value={props.state}
            thumbColor={'white'}
            trackColor={{ true: Color.primary }}
        />
    </View>);
}
const filtersScreen = (props) => {
    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const { navigation } = props;
    const dispatch = useDispatch();
    const saveFilters = useCallback(() => {
        const filters = {
            glutenFree: glutenFree,
            vegan: vegan,
            vegetarian: isVegetarian,
            lactoseFree: isLactoseFree
        };
        dispatch(applyFilters(filters));
    }, [glutenFree, vegan, isVegetarian, isLactoseFree, dispatch]);

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterItem onChange={newVal => setGlutenFree(newVal)} state={glutenFree} title='Gluten-Free' />
            <FilterItem onChange={newVal => setVegan(newVal)} state={vegan} title='Vegan' />
            <FilterItem onChange={newVal => setIsVegetarian(newVal)} state={isVegetarian} title='Vegetarian' />
            <FilterItem onChange={newVal => setIsLactoseFree(newVal)} state={isLactoseFree} title='Lactose-Free' />

        </View>
    );
};
filtersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }}></Item>
        </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save' iconName='ios-save' onPress={navData.navigation.getParam('save')}></Item>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        margin: 20,
        fontSize: 20
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

export default filtersScreen;