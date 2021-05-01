import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";

const key = 'AIzaSyAoRSl2SkJfK6C1jhbRgTY_ZY51Ale3YZs'


export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3'
});