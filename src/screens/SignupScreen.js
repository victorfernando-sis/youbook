import React from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text> Signup Screen</Text>
                <Button title="Login" onPress={() => navigation.navigate('Discovery')} />

            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default SignupScreen;