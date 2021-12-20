import { Bookmark, List, Video } from "./types";

export const lists: List[] = [
  {
    id: 5434364,
    name: "New Releases"
  },
  {
    id: 65456475,
    name: "Thrillers"
  }
];

export const videos: Video[] = [
  {
    id: 65432445,
    listId: 5434364,
    title: "The Chamber"
  },
  {
    id: 675465,
    listId: 5434364,
    title: "Fracture"
  },
  {
    id: 70111470,
    listId: 65456475,
    title: "Die Hard"
  },
  {
    id: 654356453,
    listId: 65456475,
    title: "Bad Boys"
  }
];

export const bookmarks: Bookmark[] = [
  { videoId: 65432445, time: 32432 },
  { videoId: 65432445, time: 32300 },
  { videoId: 675465, time: 3534543 },
  { videoId: 675465, time: 3534600 },
  { videoId: 70111470, time: 983134 },
  { videoId: 70111470, time: 983400 },
  { videoId: 70111470, time: 983500 },
  { videoId: 654356453, time: 6453454 },
  { videoId: 654356453, time: 6453700 },
];