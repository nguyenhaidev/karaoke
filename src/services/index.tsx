import settings from "../settings";
import { ApiResponse, Song } from "../types";
import instance from "./instance";

export const getSongs = (
  key: string,
  isKaraoke: boolean,
  page = 0
): Promise<ApiResponse<Song[]>> => {
  const params = {
    q: `${key} ${isKaraoke && "karaoke"}`,
    type: "video",
    page,
    region: "VN",
    // &type=video&page=0&region=VN
  };
  return instance.get(settings.api.searchSongs.url, { params });
};
