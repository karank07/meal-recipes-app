import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Color from '../constants/Color';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouriteScreen from '../screens/FavouriteMealsScreen';

const StackNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meals Categories',
        }
    },

    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Color.primary
    }
});

const TabNavigator = createBottomTabNavigator({
    MealsTab: StackNavigator,
    FavTab: FavouriteScreen
},{
    activeTintColor: Color.accent
})

export default createAppContainer(TabNavigator);