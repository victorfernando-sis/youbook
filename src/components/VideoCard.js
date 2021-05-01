import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const VideoCard = ({ snippet }) => {
    return (
        <View style={styles.cardBackground}>
            <Image style={{ height: 250 }} source={{ uri: snippet.thumbnails.high.url }} />
            <View style={styles.cardDetailStyle}>
                <Image style={styles.profileImg} source={require('../../assets/favicon.png')} />
                <View style={{ marginRight: 20 }}>
                    <Text style={{ fontSize: 16 }}> {snippet.title}</Text>
                    <Text style={{ fontSize: 12 }}> {snippet.channelTitle} - 41k views </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBackground: {

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
    },
    cardDetailStyle: {
        flexDirection: "row",
        padding: 5,
        height: 70,
        width: '90%'
    },
    profileImg: {
        margin: 10,
        width: 35,
        height: 35,
    }
});

export default VideoCard;