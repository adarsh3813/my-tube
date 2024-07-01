const YOUTUBE_API_KEY = "AIzaSyB1b8Tk1QIMzT5OjD8D_1d2VHr3_XetpUg";

export const YOUTUBE_VIDEO_LIST_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const VIDEO_DETAILS_URL = (videoId) => {
  return (
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
    videoId +
    "&key=" +
    YOUTUBE_API_KEY
  );
};
