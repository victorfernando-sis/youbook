import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Context } from '../context/VideoBookContext';
import  VideoCard  from "../components/VideoCard";

const DiscoveryScreen = ({ navigation }) => {
    const { state, getVideobook } = useContext(Context);

    useEffect(() => {
        getVideobook();
    }, []);

    return (
        <SafeAreaView>
            <View>
                <VideoCard />
                <Text> Discovery Screen</Text>
                <Button title="Go to PlayScreen" onPress={() => navigation.navigate('Play')} />
                <Button title="Go to AccountScreen" onPress={() => navigation.navigate('Account')} />
                <Button title="Update Title" onPress={() => navigation.setOptions({ title: "updated!" })} />

            </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({});

export default DiscoveryScreen;