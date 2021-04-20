import React from 'react';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';

const SigninScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text> Signin Screen</Text>
                <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />

            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default SigninScreen;