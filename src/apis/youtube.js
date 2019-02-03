import axios from "axios";

const KEY = "AIzaSyBXh_KHp02TzmXDPGXs15MeZ9ZZgbSsC2I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
