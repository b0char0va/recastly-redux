import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';


var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  return _.debounce ( (dispatch) =>{
    var getData = (data)=>{
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    };
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 4}, getData);
  }, 200);
};

export default handleVideoSearch;
