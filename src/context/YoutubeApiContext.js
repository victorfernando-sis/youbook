import React from 'react';
import createDataContext from './createDataContext';
import youtubeV3 from '../api/youtubeV3';
import AsyncStorage from "@react-native-community/async-storage"
import { id } from '../playlistIds.json';
const shuffle = require('shuffle-array');


const videoReducer = (state, action) => {
    switch (action.type) {
        case 'get_videos':
            return action.payload;
        case 'get_playlists':
            return action.payload;
        default:
            return state;
    }
};
const getChannels = dispatch => {
    return async () => {
        const response = await youtubeV3.get('/search?', {
            params: {
                q: 'audiobook',
                type: 'channel',
                maxResults: 50,
                key: 'AIzaSyAoRSl2SkJfK6C1jhbRgTY_ZY51Ale3YZs'
            }
        })
    }
};
const getPlaylists = (dispach) => {
    return async () => {
        const ETag = await AsyncStorage.getItem('ETag_playlists');
        const ramdom_ids = shuffle.pick(id, { 'picks': 4 }).toString()
        const response = await youtubeV3.get('/playlists?key=AIzaSyAoRSl2SkJfK6C1jhbRgTY_ZY51Ale3YZs', {
            headers: { 'etag': ETag },
            params: {
                part: 'snippet,player',
                fields: 'etag,items(id,snippet,player)',
                id: ramdom_ids,
                maxResults: 1
            }
        });
        await AsyncStorage.setItem('ETag_playlists', response.data.etag);
        dispach({ type: "get_playlists", payload: response.data });
    };
};

const getVideos = (dispatch) => {
    return async () => {
        const ETag = await AsyncStorage.getItem('ETag');
        const response = await youtubeV3.get('/search?key=AIzaSyAoRSl2SkJfK6C1jhbRgTY_ZY51Ale3YZs', {
            headers: { 'etag': ETag.toString() },
            params: {
                q: 'audiobook',
                part: 'snippet',
                type: 'playlist',
                maxResults: '1'
            }
        });
        await AsyncStorage.setItem('ETag', response.data.etag);
        dispatch({ type: "get_videos", payload: response.data });
    };
};

export const { Context, Provider } = createDataContext(
    videoReducer,
    { getVideos, getPlaylists },
    []
);