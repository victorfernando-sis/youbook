import React from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';

const PlayScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text> Play Screen</Text>
                <Button title="Go to PlayScreen" onPress={() => navigation.navigate('Play')} />

            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default PlayScreen;