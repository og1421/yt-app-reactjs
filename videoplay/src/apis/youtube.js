import axios from 'axios';

const KEY = 'AIzaSyDY79u4aGSxTA7bXJ_V26RKxWinsqnVqTo'

//passando os parametros de busca na api do google
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});