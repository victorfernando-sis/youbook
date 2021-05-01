import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/YoutubeApiContext';
import VideoCard from "../components/VideoCard";

const DiscoveryScreen = ({ navigation }) => {
    const { state, getVideos, getPlaylists } = useContext(Context);
    useEffect(() => {
        getPlaylists();
    }, [navigation]);

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={state.items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Play', { 'id': item.id })}>
                                <VideoCard snippet={item.snippet} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({});

export default DiscoveryScreen;