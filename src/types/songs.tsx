export interface Thumbnails {
  quality: string;
  url: string;
  width: number;
  height: number;
}
export interface Song {
  type: string;
  title: string;
  videoId: string;
  author: string;
  authorId: string;
  authorUrl: string;
  authorVerified: boolean;
  videoThumbnails: Thumbnails[];
  description: string;
  descriptionHtml: string;
  viewCount: number;
  published: number;
  publishedText: string;
  lengthSeconds: number;
  liveNow: boolean;
  premium: boolean;
  isUpcoming: boolean;
}
