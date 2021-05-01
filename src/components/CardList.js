import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import VideoCard from './VideoCard';
import { Context } from '../context/YoutubeApiContext';


const CardList = ({ listTitle }) => {
    const { state } = useContext(Context);

    return (
        <View>
            <Text style={styles.title} > {listTitle} </Text>
            <FlatList
                data={state.items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return <VideoCard playlist={item} />
                }}
            />
            {/* <VideoCard /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#1A5A5D'
    }
});

export default CardList;