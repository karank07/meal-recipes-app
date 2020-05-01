import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import Color from '../constants/Color';

const categoryTile = props => {
    let TouchCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version > 20) {
        TouchCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.listContainer} >
            <TouchCmp style={{ flex: 1 }} onPress={props.onPress} activeOpacity={0.5}>
                <View style={{ ...styles.list, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchCmp>
        </View>);
};

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 8,
        overflow: Platform.OS === 'android' && Platform.Version > 20 ? 'hidden' : 'visible',
    },
    list: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 10,
        padding: 15,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'

    }
});

export default categoryTile;