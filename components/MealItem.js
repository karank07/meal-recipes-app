import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

import CustText from './CustText';

const mealItem = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onSelect}>
                <View style={{ ...styles.row, ...styles.header }}>
                    <ImageBackground source={{ uri: props.img }} style={styles.img}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}> {props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.row, ...styles.desc }}>
                    <CustText>{props.duration}M</CustText>
                    <CustText>{props.complexity.toUpperCase()}</CustText>
                    <CustText>{props.affordability.toUpperCase()}</CustText>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        shadowColor: 'black',
        shadowOffset: {height: 3, width: 0},
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 5
    },
    row: {
        flexDirection: 'row',
        
    },
    img: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    header: {
        height: '85%'
    },
    desc: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignContent: 'center',
        height: '15%'
    }
});

export default mealItem;