import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Feather,FontAwesome } from '@expo/vector-icons';

export const HeaderButtons = (navigation) => {
    return (
        <View style={styles.buttonsStyle}>
            <Feather name="youtube" size={24} color="black" style={styles.iconStyle}
                onPress={() => { navigation.navigate('Search') }} />
            <Feather name="search" size={24} color="black" style={styles.iconStyle}
                onPress={() => { navigation.navigate('Account') }} />
            <Feather name="user" size={24} color="black" style={styles.iconStyle}
                onPress={() => { navigation.navigate('Account') }} />
        </View>
    );
};

export const HeaderTitle = () => {
    return (
        <Image
            style={{ width: 90, height: 20, marginLeft: 20 }}
            source={require('../../assets/youbook.png')}
        />
    );
}

const styles = StyleSheet.create({
    buttonsStyle: {
        flexDirection: "row",
        marginRight: 5
    },
    iconStyle: {
        marginHorizontal: 15
    }
});