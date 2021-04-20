import React from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';

const DiscoveryScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text> Discovery Screen</Text>
                <Button title="Go to PlayScreen" onPress={() => navigation.navigate('Play')} />
                <Button title="Go to AccountScreen" onPress={() => navigation.navigate('Account')} />

            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default DiscoveryScreen;