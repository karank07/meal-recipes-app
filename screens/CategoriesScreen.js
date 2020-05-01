import React, { version } from 'react';
import { View, StyleSheet, Text, Button, FlatList, } from 'react-native';

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


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default categoriesScreen;