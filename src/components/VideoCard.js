import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const VideoCard = () => {
    return (
        <View style={styles.cardBackground}>
            <Image style={{ width: 140, height: 150 }} source={require('../../assets/favicon.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardBackground: {
        width: 212,
        height: 150,
        backgroundColor: '#ffff',
        borderColor: '#b4b4b4',
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: "#b4b4b4",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.04,
        shadowRadius: 1.41,

        elevation: 2,

    }
});

export default VideoCard;