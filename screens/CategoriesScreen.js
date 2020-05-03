import React, { version } from 'react';
import { View, StyleSheet, Text, Button, FlatList, } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../Data/Data';
import CategoryTile from '../components/CategoryTile';

const categoriesScreen = props => {
    const renderCategoryList = (itemData) => {
        return (
            <CategoryTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }} />
        );
    }
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderCategoryList}
            numColumns={2} />
    );
};

categoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            < Item title='Menu' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} ></Item>
        </HeaderButtons>)
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default categoriesScreen;