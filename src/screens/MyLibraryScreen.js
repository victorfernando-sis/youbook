import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'

const MyLibraryScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View>
                <Text> MyLibrary Screen</Text>
                <Button title="Go to AccountScreen" onPress={() => navigation.navigate('Account')} />
                <Button title="Go to PlayScreen" onPress={() => navigation.navigate('Play')} />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});


export default MyLibraryScreen;