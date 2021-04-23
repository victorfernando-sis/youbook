import createDataContext from './createDataContext';
import youtubeV3 from '../api/youtubeV3';


const videoReducer = (state, action) => {
    switch (action.type) {
        case 'get_videos':
            return action.payload;
        default:
            return state;
    }
};

const getVideobook = (dispatch) => {
    return async () => {
        const response = await youtubeV3.get('/videos', {
            params: {
                key: "AIzaSyAoRSl2SkJfK6C1jhbRgTY_ZY51Ale3YZs",
                part: "snippet",
                id: "Ks-_Mh1QhMc"
            }
        });
        console.log(response)
        dispatch({ type: "get_videos", payload: response.data });
    };
};

export const { Context, Provider } = createDataContext(
    videoReducer,
    { getVideobook },
    []
);