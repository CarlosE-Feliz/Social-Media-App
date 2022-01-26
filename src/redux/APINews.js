import axios from 'axios';

const GET_NEWS = 'GET_NEWS';
const apiURL = 'http://api.mediastack.com/v1/news?access_key=cb458b54af5fbbdae0e662cef8e9ec29&sources=en,-de';
const initialNews = []
const reducer = (state = initialNews, action) => {
    switch(action.type){
        case GET_NEWS:
            return [...action.newData];
        default:
            return state;
    }
};




export default reducer;