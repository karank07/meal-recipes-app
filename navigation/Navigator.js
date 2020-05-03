import React from 'react';
import { Text, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';

import Color from '../constants/Color';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouriteScreen from '../screens/FavouriteMealsScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary
};

const StackNavigator = createStackNavigator({
    Categories: CategoriesScreen,

    CategoryMeals: CategoryMealsScreen,

    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavStackNav = createStackNavigator({
    Favourites: FavouriteScreen,

    MealDetails: MealDetailsScreen

}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const tabConifg = {
    MealsTab: {
        screen: StackNavigator, navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarIcon: (tab) => {
                return <Ionicons name='ios-restaurant' size={25} color={tab.tintColor} />;
            },
            tabBarColor: Color.primary,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Meals</Text> : 'Meals'
        }
    },

    FavTab: {
        screen: FavStackNav, navigationOptions: {
            tabBarLabel: 'Favourites!',
            tabBarIcon: (tab) => {
                return <Ionicons name='ios-star' size={25} color={tab.tintColor} />;
            },
            tabBarColor: Color.accent,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans' }}>Favourites</Text> : 'Favourites!'
        }
    }
};

const MealTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabConifg, {
        activeColor: 'white',
        shifting: true
    }) : createBottomTabNavigator(tabConifg, {
        tabBarOptions: {
            activeTintColor: Color.primary,
            labelStyle: { fontFamily: 'open-sans' }
        }
    });

const FilterNav = createStackNavigator({
    Filters: FiltersScreen
}, { defaultNavigationOptions: defaultStackNavOptions });

const drawerNav = createDrawerNavigator({
    MealsNav: {
        screen: MealTabNavigator, navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: {
        screen: FilterNav, navigationOptions: {
            drawerLabel: 'Filter Meal'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Color.accent,
        labelStyle: 'open-sans-bold'
    }
})

export default createAppContainer(drawerNav);