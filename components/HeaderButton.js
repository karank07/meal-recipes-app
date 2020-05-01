import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';

import Color from '../constants/Color';

const customButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={22}
            color={Platform.OS === 'android' ? 'white' : Color.primary} />);
};

export default customButton;