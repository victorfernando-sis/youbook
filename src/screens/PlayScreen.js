import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Context } from '../context/YoutubeApiContext';
import { WebView } from 'react-native-webview';
import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';
import VideoPlayers from 'react-native-video-players';

const PlayScreen = ({ route, navigation }) => {
    const { state } = useContext(Context);

    const playlist = state.items.find((playlist) => playlist.id == route.params.id);
    console.log(navigation)
    return (
        <SafeAreaView>
            <View>
                <View style={{ width: "100%", height: 200 }}>
                    <YoutubePlayer height={250} videoId={"mYfJxlgR2jw"} />
                </View>
                <View style={{ width: "100%", height: 200 }}>
                    <WebView
                        source={{ uri: "http://www.youtube.com/embed/videoseries?list=PLSH_xM-KC3Zs6Ue4Wcn0Ggk3ClWJpV599&playsinline=1" }}
                        allowsInlineMediaPlayback={true}
                        style={{ width: "100%", height: "50%" }} />
                </View>
                {/* <WebView source={{ html: playlist.player.embedHtml }} />
                    <WebView source={{ html: '<iframe width="640" height="360" src="http://www.youtube.com/embed/videoseries?list=PLSH_xM-KC3Zs6Ue4Wcn0Ggk3ClWJpV599&playsinline=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>' }} /> */}
                <View style={{ width: "100%", height: 200 }}>
                    <Video
                        source={{
                            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                            // uri: 'https://www.youtube.com/embed/mYfJxlgR2jw',

                        }}
                        useNativeControls
                        style={{ width: "100%", height: "50%" }}
                    />
                </View>

                {/* <Video source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}/> */}
                <Text> {playlist.player.embedHtml.toString()}</Text>
                <Text> {playlist.snippet.title}</Text>
                <Button title="Go to PlayScreen" onPress={() => navigation.navigate('Play')} />

            </View>
        </SafeAreaView >
    )
};

const styles = StyleSheet.create({

});

export default PlayScreen;