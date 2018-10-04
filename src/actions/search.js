import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  return(dispatch)=>{
    var getData = (data)=>{
      if(data){
        dispatch(changeVideoList(data));
        dispatch(changeVideo(data[0]));
      }
    };
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 4}, getData);
  };
};

export default handleVideoSearch;
