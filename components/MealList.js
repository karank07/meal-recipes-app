import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const mealList = props => {
    const favMeals = useSelector(state => state.meals.favourites);

    const renderList = (itemData) => {
        const isFav= favMeals.some(meal => meal.id === itemData.item.id);
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            img={itemData.item.imageUrl}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'MealDetails',
                    params: {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFav
                    }
                });
            }} />
    };
    return (
        <View style={styles.listConatiner}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.listData}
                renderItem={renderList}
                style={styles.list} />
        </View>
    );

};

const styles = StyleSheet.create({
    listConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    list: {
        width: '100%',

    }
});

export default mealList;